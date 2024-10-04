import { observer } from "mobx-react-lite"
import { Divider, Grid, Header, Icon, Segment } from "semantic-ui-react"
import { Hutba } from "../../../app/models/hutba"

interface Props {
    hutba: Hutba
}

export default observer(function HutbaDetailedContent({hutba}: Props) {
    return (
        <>
            <Segment className="segment-content"
                textAlign='center'
                attached='top'
                color="green"
                style={{border: 'none'}}
            >
                <Header className="segment-header">Hutba na dan: {hutba.postedDate}</Header>
            </Segment>
            <Segment>
                <Grid>
                    <Grid.Column width={16}>
                        <p className="description-content">{hutba.description}</p>
                    </Grid.Column>
                </Grid>
                <Divider style={{marginTop: 30}}></Divider>
                <span className="podijeli-hutbu">Podijelite današnju hutbu na društvenim mrežama</span>
                <Divider></Divider>
                <div>
                {/* Kod za trenutno dijenje na fb preko localhost */}
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank" rel="noopener noreferrer">
                  <Icon name="facebook" className="fb" />
                </a>

                {/* Kod za trenutno dijenje na insta preko localhost */}
                <a 
                    href={`https://www.instagram.com/`}
                    target="_blank" rel="noopener noreferrer">
                    <Icon name="instagram" className="ig" />
                </a>

                {/* Kod za trenutno dijenje na linkedIn preko localhost */}
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(hutba?.title || 'Hutba')}`}
                  target="_blank" rel="noopener noreferrer">
                  <Icon name="linkedin" className="li" />
                </a>

                {/* Kod za trenutno dijenje na twitter preko localhost */}
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(hutba?.title || 'Hutba')}`}
                  target="_blank" rel="noopener noreferrer">
                  <Icon name="twitter" className="tw" />
                </a>



                   {/* Kod za dijelenje na fb kada budu aplikacija stavljena na internet */}
                   {/* <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(hutbaTitle)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon name="facebook" className="fb" />
                    </a> */}
                    
                    {/* Instagram - vodi na profil (nije moguće direktno dijeliti kao na drugim mrežama) */}
                    {/* <a
                        href="https://www.instagram.com/yourprofile"  // Link do tvog Instagram profila
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon name="instagram" className="ig" />
                    </a> */}
                    
                    {/* Kod za dijelenje na linkedIn kada budu aplikacija stavljena na internet */}
                    {/* <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon name="linkedin" className="li" />
                    </a> */}
                    
                    {/* Kod za dijelenje na twitter kada budu aplikacija stavljena na internet */}
                    {/* <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(hutbaTitle)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon name="twitter" className="tw" />
                    </a> */}
                </div>
            </Segment>
        </>
    )
})