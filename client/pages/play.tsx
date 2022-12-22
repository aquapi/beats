import { useEffect } from "react";
import Game from "../src/game";
import { loop } from "canvsh";
import { Button } from "@nextui-org/react";
import run from "../src/game/run";

function Play() {
    useEffect(() => {
        const canvas = document.querySelector("canvas") as HTMLCanvasElement;
        canvas.width = screen.availWidth / 4 * 3;
        canvas.height = 505;

        const game = new Game(document.querySelector("canvas") as HTMLCanvasElement);
        loop(game);

        // Add default gameplay here
        run("", game);

        addEventListener("keypress", e => 
            document.getElementById("key-" + e.key.toLowerCase())?.click()
        );
    }, []);

    return <>
        <canvas></canvas>
        <div id="key-records">
            {/** @ts-ignore */}
            <Button.Group light borderWeight="light" color="neutral">
                <Button id="key-t">T</Button>
                <Button id="key-y">Y</Button>
                <Button id="key-u">U</Button>
            </Button.Group>
            {/** @ts-ignore */}
            <Button.Group light borderWeight="light" color="neutral">
                <Button id="key-g">G</Button>
                <Button id="key-h">H</Button>
                <Button id="key-j">J</Button>
            </Button.Group>
        </div>
    </>;
};

export default Play;