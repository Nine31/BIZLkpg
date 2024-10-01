import { Button, Item, Label, Segment } from "semantic-ui-react";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function HutbaList() {
    const {hutbaStore} = useStore();
    const {deleteHutba, hutbeByDate, loading} = hutbaStore;

    const [target, setTarget] = useState('');

    function handleHutbaDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteHutba(id);
    }

    return (

        <Segment>
            <Item.Group divided>
                {hutbeByDate.map(hutba => (
                    <Item key={hutba.id}>
                        <Item.Content>
                            <Item.Header as='a'>{hutba.title}</Item.Header>
                            <Item.Meta>{hutba.postedDate}</Item.Meta>
                            <Item.Description>
                                <div>{hutba.description}</div>
                                <div>{hutba.author}, {hutba.views}</div>
                            </Item.Description>
                            <Item.Extra>
                            <Button 
                                name={hutba.id}
                                loading={loading && target === hutba.id}
                                onClick={(e) => handleHutbaDelete(e, hutba.id)} 
                                floated="right" 
                                content='Izbriši' 
                                color="red" 
                            />
                                <Button onClick={() => hutbaStore.selectHutba(hutba.id)} floated="right" content='Otvori' color="blue" />
                                <Label basic content={hutba.pictureUrl}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})