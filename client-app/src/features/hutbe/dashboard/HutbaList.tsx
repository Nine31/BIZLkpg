import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Hutba } from "../../../app/models/hutba";
import { SyntheticEvent, useState } from "react";

interface Props {
    hutbe: Hutba[];
    selectHutba: (id: string) => void;
    deleteHutba: (id: string) => void;
    submitting: boolean;
}

export default function HutbaList({ hutbe, selectHutba, deleteHutba, submitting }: Props) {
    const [target, setTarget] = useState('');

    function handleHutbaDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteHutba(id);
    }

    return (

        <Segment>
            <Item.Group divided>
                {hutbe.map(hutba => (
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
                                loading={submitting && target === hutba.id}
                                onClick={(e) => handleHutbaDelete(e, hutba.id)} 
                                floated="right" 
                                content='Izbriši' 
                                color="red" 
                            />
                                <Button onClick={() => selectHutba(hutba.id)} floated="right" content='Otvori' color="blue" />
                                <Label basic content={hutba.pictureUrl}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}