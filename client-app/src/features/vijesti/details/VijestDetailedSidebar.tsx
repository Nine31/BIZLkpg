import { observer } from "mobx-react-lite";
import { Header, Image, Label, List, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default observer(function VijestDetailedSidebar() {
    const {vijestStore} = useStore();
    const {vijestiByDate, loadVijesti} = vijestStore;

    useEffect(() => {
        if (vijestiByDate.length === 0) {
            loadVijesti();
        }
    }, [loadVijesti, vijestiByDate.length]);

    const latestVijesti = vijestiByDate.slice(0, 3);

    return (

        <>
            <Segment className="segment-sidebar"
                textAlign='center'
                attached='top'
                inverted
                secondary
                style={{border: 'none'}}
            >
                <Header className="title-sidebar">Posljednji članci</Header>
            </Segment>
            <Segment attached>
                <List relaxed divided className="list">
                    {latestVijesti.map(vijest => (
                        <List.Item style={{position: 'relative'}} className="list-item">
                            <Label className="label-sidebar"
                                style={{position: 'absolute'}}
                                ribbon='right'
                                color="green"
                            >
                                Istaknute vijesti
                            </Label>
                            <Image 
                                size="tiny" 
                                src={vijest.pictureUrl || '/assets/Hutba_Slike/Hutba-1.jpg'} className="img-aktuelno"
                                style={{ height: '50px', objectFit: 'cover' }}
                            />
                            <List.Content className="list-content">
                                <List.Header className="title-list-header">
                                    <Link to={`/vijesti/${vijest.id}`} className="link-title">
                                        {vijest.title}
                                    </Link>
                                </List.Header>
                                <List.Description className="date-list-description">
                                    {(vijest.publishedDate)}
                                </List.Description>
                            </List.Content>
                        </List.Item>
                    ))}
                </List>
            </Segment>
        </>
    )
})