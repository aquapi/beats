import { useEffect } from "react";
import Game from "../src/game";
import { loop } from "canvsh";
import { Button } from "@nextui-org/react";

function Play() {
    useEffect(() => {
        const canvas = document.querySelector("canvas") as HTMLCanvasElement;
        canvas.width = screen.availWidth / 4 * 3;
        canvas.height = screen.availHeight / 4 * 3;

        const game = new Game(document.querySelector("canvas") as HTMLCanvasElement);
        loop(game);

        addEventListener("resize", () => {
            canvas.width = screen.availWidth / 4 * 3;
            canvas.height = screen.availHeight / 4 * 3;
        });
    }, []);

    return <>
        <canvas></canvas>
        <div id="key-records">
            <Button.Group light>
                <Button>T</Button>
                <Button>Y</Button>
                <Button>U</Button>
            </Button.Group>
            <Button.Group light>
                <Button>G</Button>
                <Button>H</Button>
                <Button>I</Button>
            </Button.Group>
        </div>
    </>;
};

export default Play;