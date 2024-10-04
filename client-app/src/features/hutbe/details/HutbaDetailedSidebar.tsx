import { observer } from "mobx-react-lite";
import { Header, List, Segment, Image, Label } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { Link } from "react-router-dom";

export default observer(function HutbaDetailedSidebar() {
    const {hutbaStore} = useStore();
    const {hutbeByDate} = hutbaStore;

    const latestHutbe = hutbeByDate.slice(0, 3);

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
                                Aktuelno
                            </Label>
                            <Image size="tiny" src={hutba.pictureUrl || '/assets/Hutba_Slike/Hutba-1.jpg'} className="img-aktuelno"/>
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