import { observer } from "mobx-react-lite";
import { Header, List, Segment, Image, Label } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default observer(function HutbaDetailedSidebar() {
    const {hutbaStore} = useStore();
    const {hutbeByDate, selectedHutba, loadHutbe, loadingInitial} = hutbaStore;

    useEffect(() => {
        if (hutbeByDate.length === 0) {
            loadHutbe();
        } 
    }, [loadHutbe, hutbeByDate.length]);

    if (loadingInitial) return null; // Prikažite spinner ako se hutbe učitavaju

    const latestHutbe = hutbeByDate
        .filter(hutba => hutba.id !== selectedHutba?.id) // Izbacujemo trenutno otvorenu hutbu
        .slice(0, 3); // Uzimamo tri najnovije hutbe osim trenutne

    return (
        <>
            <Segment className="segment-sidebar"
                textAlign='center'
                attached='top'
                inverted
                secondary
                style={{border: 'none'}}
            >
                <Header className="title-sidebar">3 posljednje hutbe</Header>
            </Segment>
            <Segment attached>
                <List relaxed divided className="list">
                    {latestHutbe.map(hutba => (
                        <List.Item style={{position: 'relative'}} className="list-item">
                            <Label className="label-sidebar"
                                style={{position: 'absolute'}}
                                ribbon='right'
                                color="green"
                            >
                                Novo
                            </Label>
                            <Image 
                                size="tiny" 
                                src={hutba.pictureUrl || '/assets/Hutba_Slike/Hutba-1.jpg'} className="img-aktuelno"
                                style={{ height: '50px', objectFit: 'cover' }}
                            />
                            <List.Content className="list-content">
                                <List.Header className="title-list-header">
                                    <Link to={`/hutbe/${hutba.id}`} className="link-title">
                                        {hutba.title}
                                    </Link>
                                </List.Header>
                                <List.Description className="date-list-description">
                                    {(hutba.postedDate)}
                                </List.Description>
                            </List.Content>
                        </List.Item>
                    ))}
                </List>
            </Segment>
        </>
    )
})