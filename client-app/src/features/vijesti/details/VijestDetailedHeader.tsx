import { observer } from "mobx-react-lite";
import { Segment, Image, Item, Header, Icon } from "semantic-ui-react";
import { Vijest } from "../../../app/models/vijest";

const vijestImageStyle = {
    filter: 'brightness(30%',
    height: '500px',
};

const vijestImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    vijest: Vijest
}

export default observer(function VijestDetailedHeader({vijest}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={vijest.pictureUrl || '/assets/Vijest_Slike/News.jpg'} fluid style={vijestImageStyle}/>
                <Segment style={vijestImageTextStyle} basic >
                    <Item.Group>
                        <Item>
                            <Item.Content className="content-header">
                                <Header 
                                    size="huge"    
                                    content={vijest.title}
                                    style={{color: 'white'}}
                            />
                            {/* <p>Vijest istaknuta: {vijest.isFeatured ? "Da" : "Ne"}</p> */}
                            <p>
                                Autor: {vijest.author}
                            </p>
                            <span><Icon name="eye" />{vijest.views}</span>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
        </Segment.Group>
    )
})