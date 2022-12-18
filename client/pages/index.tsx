import { Card, Text, Button, Row } from "@nextui-org/react";
import redirect from "../src/utils/redirect";

function Home() {
    return <Card css={{ mw: "330px" }}>
            <Card.Header>
                <Text b>Key Beats</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
                <Text>
                    A music game which requires keyboard skill, and of course, music perception. Have fun playing!
                </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
                <Row justify="flex-end">
                    <Button size="sm" onClick={redirect("/game")}>Play</Button>
                    <Button size="sm" light onClick={redirect("/guide")}>Guide</Button>  
                </Row>
            </Card.Footer>
        </Card>;
};

export default Home;