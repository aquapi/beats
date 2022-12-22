import { CanvasObject } from "canvsh";

export default class Beat extends CanvasObject {
    readonly size = 60;
    y: number;

    constructor(canvas: HTMLCanvasElement, public readonly x: number, public readonly text: string, public speed: number = 8) {
        super(canvas);
        this.y = 25;
    }

    async render(ctx: CanvasRenderingContext2D) {
        this.y += this.speed;

        ctx.beginPath();
        ctx.fillStyle = "gray";
        ctx.fillRect(this.x, this.y, this.size, this.size);

        ctx.beginPath();
        ctx.font = "20px Arial";
        ctx.fillStyle = "whitesmoke";
        ctx.fillText(this.text, this.x + 23, this.y + 37);
    }
}