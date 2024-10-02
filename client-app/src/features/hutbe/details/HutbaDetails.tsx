import { Button, Card } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";


export default observer(function HutbaDetails() {

    const {hutbaStore} = useStore();
    const {selectedHutba: hutba, loadHutba, loadingInitial} = hutbaStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadHutba(id);
    }, [id, loadHutba])

    if (loadingInitial || !hutba) return <LoadingComponent />;

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
                    <Button as={Link} to={`/azuriraj-hutbu/${hutba.id}`} basic color="blue" content='Izmjeni'/>
                    <Button as={Link} to={'/hutbe'} basic color="grey" content='Otkaži'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
})