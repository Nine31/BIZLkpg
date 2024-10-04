import { observer } from "mobx-react-lite";
import { Hutba } from "../../../app/models/hutba";
import { Segment, Image, Item, Header, Icon } from "semantic-ui-react";

const hutbaImageStyle = {
    filter: 'brightness(30%'
};

const hutbaImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    hutba: Hutba
}

export default observer(function HutbaDetailedHeader({hutba}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={hutba.pictureUrl || '/assets/Hutba_Slike/Hutba-1.jpg'} fluid style={hutbaImageStyle}/>
                <Segment style={hutbaImageTextStyle} basic >
                    <Item.Group>
                        <Item>
                            <Item.Content className="content-header">
                                <Header 
                                    size="huge"    
                                    content={hutba.title}
                                    style={{color: 'white'}}
                            />
                            <p>
                                Autor: {hutba.author}
                            </p>
                            <span><Icon name="eye" />{hutba.views}</span>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
        </Segment.Group>
    )
})