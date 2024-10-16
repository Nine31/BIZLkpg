import { Button, Form, Segment } from "semantic-ui-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from 'uuid';

export default observer(function HutbaForm() {
    const {hutbaStore} = useStore();
    const {createHutba, updateHutba, loading, loadHutba, loadingInitial} = hutbaStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const [hutba, setHutba] = useState({
        id: '',
        title: '',
        description: '',
        pictureUrl: '',
        author: '',
        postedDate: '',
        views: 0
    });

    useEffect(() => {
        if (id) loadHutba(id).then(hutba => setHutba(hutba!))
    }, [id, loadHutba])

    function handleSubmit() {
        if (!hutba.id) {
            hutba.id = uuid();
            createHutba(hutba).then(() => navigate(`/hutbe/${hutba.id}`))
        } else {
            updateHutba(hutba).then(() => navigate(`/hutbe/${hutba.id}`))
        }
        hutba.id ? updateHutba(hutba) : createHutba(hutba);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setHutba({...hutba, [name]: value})
    }

    if (loadingInitial) return <LoadingComponent content="Učitavanje aplikacije..."/>

    return (
        <Segment clearing className="okvir">
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Rubrika' value={hutba.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Opis hutbe...' value={hutba.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='Link slike' value={hutba.pictureUrl} name='pictureUrl' onChange={handleInputChange} />
                <Form.Group widths='equal'>
                    <Form.Input placeholder='Autor' value={hutba.author} name='author' onChange={handleInputChange} />
                    <Form.Input type="date" placeholder='Datum' value={hutba.postedDate} name='postedDate' onChange={handleInputChange} />
                </Form.Group>
                <Form.Input disabled placeholder='Pregledi' value={hutba.views} name='views' onChange={handleInputChange} />
                <Button className="potvrdi" loading={loading} floated="right" type="submit" content='Potvrdi'/>
                <Button className="otkazi" as={Link} to='/hutbe' floated="right" type="button" content='Otkaži'/> 
            </Form>
        </Segment>
    )
})