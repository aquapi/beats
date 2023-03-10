import MessageCard, { Message } from "../src/components/MessageCard";

const guideMessage: Message = {
    header: "Guide",
    description: "Use T, Y, U, G, H, J to play! If the beat runs through the line then game over!",
    buttons: [{
        link: "/",
        text: "Back",
        light: true
    }, {
        link: "/play",
        text: "Play"
    }],
};

function Guide() {
    return <MessageCard {...guideMessage} />;
};

export default Guide;