import { CanvasRenderer } from "canvsh";
import Line from "./line";
import Beat from "./beat";

export default class Game extends CanvasRenderer {
    readonly lines: Line[];
    readonly beats: Beat[];
    key: string;
    readonly lineX: number[];

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.key = "";
        this.lines = [
            new Line(canvas, canvas.width / 2 - 105),
            new Line(canvas, canvas.width / 2 - 35),
            new Line(canvas, canvas.width / 2 + 35),
            new Line(canvas, canvas.width / 2 + 105)
        ];
        this.lineX = [
            canvas.width / 2 - 100,
            canvas.width / 2 - 30,
            canvas.width / 2 + 40,
        ];
        this.beats = [];
        addEventListener("keypress", e => this.key = e.key);
    }

    over(index: string, reason: string) {
        this.beats.splice(Number(index), 1);
        confirm(reason + " Another try maybe?");
    }

    checkBeat() {
        for (const index in this.beats) {
            const beat = this.beats[index];

            if (beat.y > 425)
                return this.over(index, "You clicked too late!");

            if (this.key.toUpperCase() === beat.text) {
                if (beat.y < 330)
                    return this.over(index, "You clicked too early!");

                this.beats.splice(Number(index), 1);
            }
        }
    }

    async render(ctx: CanvasRenderingContext2D) {
        for (const line of this.lines)
            await line.render(ctx);
        for (const beat of this.beats)
            if (beat)
                await beat.render(ctx);

        this.checkBeat();
    }
}