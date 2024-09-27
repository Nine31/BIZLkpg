import { Button, Card } from "semantic-ui-react";
import { Hutba } from "../../../app/models/hutba";

interface Props {
    hutba: Hutba;
    cancelSelectHutba: () => void;
    openForm: (id: string) => void;
}

export default function HutbaDetails({hutba, cancelSelectHutba, openForm}: Props) {
    return (
        <Card fluid>
            <img src={`/assets/Hutba_Slike/Hutba-1.jpg`} />
            <Card.Content>
                <Card.Header>{hutba.title}</Card.Header>
                <Card.Meta>
                    <span>{hutba.postedDate}</span>
                </Card.Meta>
                <Card.Description>
                    {hutba.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='12'>
                    <Button onClick={() => openForm(hutba.id)} basic color="blue" content='Izmjeni'/>
                    <Button onClick={cancelSelectHutba} basic color="grey" content='Otkaži'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}