import MessageCard, { Message } from "../src/components/MessageCard";

const homeMessage: Message = {
    header: "Key Beats",
    description: "A music game which requires keyboard skill, and of course, music perception. Have fun playing!",
    buttons: [{
        link: "/game",
        text: "Play"
    }, {
        link: "/guide",
        text: "Guide",
        light: true
    }],
};

function Home() {
    return <MessageCard {...homeMessage} />;
};

export default Home;