import Game from ".";
import Beat from "./beat";

// (delay * 50ms),(key),(speed);
export default async function run(code: string, game: Game) {
    if (!code)
        return;

    while (true) {
        let splIndex = code.indexOf(";");
        if (splIndex < 0) {
            await runStatement(code, game);
            return;
        }

        await runStatement(code.substring(0, splIndex), game);
        code = code.substring(splIndex + 1, code.length);
    }
}

async function wait(timeout: number) {
    return new Promise(res => setTimeout(res, timeout));
}

const keyMap: Record<string, number> = {
    T: 0,
    G: 0,
    Y: 1,
    H: 1,
    U: 2,
    J: 2,
}

async function runStatement(s: string, game: Game) {
    const [delay, key, speed] = s.split(",");
    await wait(Number(delay) * 50);
    game.beats.push(new Beat(game.canvas, game.lineX[keyMap[key]], key, Number(speed)))
}