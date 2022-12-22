import { CanvasObject } from "canvsh";

export default class Line extends CanvasObject {
    constructor(canvas: HTMLCanvasElement, public readonly x: number) {
        super(canvas);
    }

    async render(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.fillStyle = "#C1C8CD";
        ctx.fillRect(this.x - 1, 50, 2, this.canvas.height - 100);
    }
}