import { Button, Card } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";


export default function HutbaDetails() {

    const {hutbaStore} = useStore();
    const {selectedHutba: hutba, openForm, cancelSelectHutba} = hutbaStore;

    if (!hutba) return <LoadingComponent />;

    return (
        <Card fluid>
            {/* <img src={`/assets/Hutba_Slike/Hutba-1.jpg`} /> */}
            <img src={hutba.pictureUrl}/> 
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