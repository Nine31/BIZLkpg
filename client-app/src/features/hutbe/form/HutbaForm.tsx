import { Button, Form, Segment } from "semantic-ui-react";
import { ChangeEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function HutbaForm() {

    const {hutbaStore} = useStore();
    const {selectedHutba, closeForm, createHutba, updateHutba, loading} = hutbaStore;

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
        hutba.id ? updateHutba(hutba) : createHutba(hutba);
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
                <Form.Input type="date" placeholder='Datum' value={hutba.postedDate} name='postedDate' onChange={handleInputChange} />
                <Form.Input placeholder='Pregledi' value={hutba.views} name='views' onChange={handleInputChange} />
                <Button loading={loading} floated="right" positive type="submit" content='Potvrdi'/>
                <Button onClick={closeForm} floated="right" type="button" content='Otkaži'/> 
            </Form>
        </Segment>
    )
})