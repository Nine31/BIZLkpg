import { observer } from 'mobx-react-lite'
import {Segment, Header, Comment, Form, Button} from 'semantic-ui-react'

export default observer(function VijestDetailedComment() {
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                style={{border: 'none', backgroundColor: 'rgba(0, 117, 60)'}}
            >
                <Header>Ostavi komentar</Header>
            </Segment>
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Jusuf</Comment.Author>
                            <Comment.Metadata>
                                <div>Idag kl. 14:15</div>
                            </Comment.Metadata>
                            <Comment.Text>Amin!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Odgovori na komentar</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Alvedin</Comment.Author>
                            <Comment.Metadata>
                                <div>prije 2 dana</div>
                            </Comment.Metadata>
                            <Comment.Text>Amin!!!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Odgovori na komentar</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <Form.TextArea/>
                        <Button
                            content='Dodaj odgovor'
                            labelPosition='left'
                            icon='edit'
                            style={{border: 'none', backgroundColor: 'rgba(0, 117, 60)', color: '#FFF'}}
                        />
                    </Form>
                </Comment.Group>
            </Segment>
        </>

    )
})
