import { observer } from "mobx-react-lite"
import { Hutba } from "../../../app/models/hutba"
import { Grid, Icon, Segment } from "semantic-ui-react"

interface Props {
    hutba: Hutba
}


export default observer(function HutbaDetailedInfo({hutba}: Props) {
    return (
        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon className="icon-info" name="map marker alternate" size="large" />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p className="place-info">Mjesto: Bosanska islamska džamija u Linköpingu</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon className="icon-info" name="calendar" size="large" />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <span className="datum-info">
                            Datum: {hutba.postedDate}
                        </span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon className="icon-info" name="time" size="large" />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <span className="vrijeme-info">Vrijeme: 13:00</span>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    )
})