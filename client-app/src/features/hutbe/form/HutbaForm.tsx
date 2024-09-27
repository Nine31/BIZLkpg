import { Button, Form, Segment } from "semantic-ui-react";
import { Hutba } from "../../../app/models/hutba";
import { ChangeEvent, useState } from "react";

interface Props {
    hutba: Hutba | undefined;
    closeForm: () => void;
    createOrEdit: (hutba: Hutba) => void;
}

export default function HutbaForm({hutba: selectedHutba, closeForm, createOrEdit}: Props) {

    const initialState = selectedHutba ?? {
        id: '',
        title: '',
        description: '',
        pictureUrl: '',
        author: '',
        postedDate: '',
        views: 0
    }

    const [hutba, setHutba] = useState(initialState);

    function handleSubmit() {
        createOrEdit(hutba);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setHutba({...hutba, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Rubrika' value={hutba.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Opis' value={hutba.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='Slika' value={hutba.pictureUrl} name='pictureUrl' onChange={handleInputChange} />
                <Form.Input placeholder='Autor' value={hutba.author} name='author' onChange={handleInputChange} />
                <Form.Input placeholder='Datum' value={hutba.postedDate} name='postedDate' onChange={handleInputChange} />
                <Form.Input placeholder='Pregledi' value={hutba.views} name='views' onChange={handleInputChange} />
                <Button floated="right" positive type="submit" content='Potvrdi'/>
                <Button onClick={closeForm} floated="right" type="button" content='Otkaži'/> 
            </Form>
        </Segment>
    )
}