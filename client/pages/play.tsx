import { useEffect } from "react";
import Game from "../src/game";
import { loop } from "canvsh";

function Play() {
    useEffect(() => {
        const canvas = document.querySelector("canvas") as HTMLCanvasElement;
        canvas.width = screen.availWidth;
        canvas.height = screen.availHeight;

        const game = new Game(document.querySelector("canvas") as HTMLCanvasElement);
        loop(game);
    }, []);

    return <canvas></canvas>;
};

export default Play;