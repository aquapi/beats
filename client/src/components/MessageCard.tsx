import { Card, Text, Button, Row } from "@nextui-org/react";
import redirect from "../utils/redirect";

export interface Message {
    header: string,
    description: string,
    buttons: ({
        link: string,
        text: string,
        light?: boolean
    })[];
}

export default function MessageCard(msg: Message) {
    return <Card css={{ mw: "330px" }}>
        <Card.Header>
            <Text b>{msg.header}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
            <Text>{msg.description}</Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
            <Row justify="flex-end">
                {msg.buttons.map(v =>
                    <Button
                        key={v.text}
                        size="sm"
                        light={v.light}
                        onClick={redirect(v.link)}
                    >
                        {v.text}
                    </Button>
                )}
            </Row>
        </Card.Footer>
    </Card>
}