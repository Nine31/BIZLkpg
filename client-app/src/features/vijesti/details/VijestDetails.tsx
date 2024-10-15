import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import VijestDetailedHeader from "./VijestDetailedHeader";
import VijestDetailedContent from "./VijestDetailedContent";
import VijestDetailedSidebar from "./VijestDetailedSidebar";
import VijestDetailedCategory from "./VijestDetailedCategory";
import VijestDetailedComment from "./VijestDetailedComment";

export default observer(function VijestDetails() {
    const {vijestStore} = useStore();
    const {selectedVijest: vijest, loadVijest, loadingInitial} = vijestStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadVijest(id);
        }, [id, loadVijest, vijestStore])
    
    if (loadingInitial || !vijest) return <LoadingComponent />
    
    return (
        <Grid>
            <Grid.Column width={10}>
                <VijestDetailedHeader vijest={vijest} />
                <VijestDetailedContent vijest={vijest} />
                <VijestDetailedComment />
            </Grid.Column>
            <Grid.Column width={6}>
                <VijestDetailedCategory />
                <VijestDetailedSidebar />
            </Grid.Column>
        </Grid>

        // <Card fluid>
        //     <Image src={vijest.pictureUrl || '/assets/Vijest_Slike/News.jpg'} />
        //     <Card.Content>
        //         <Card.Header>{vijest.title}</Card.Header>
        //         <Card.Meta>
        //             <span>{vijest.publishedDate}</span>
        //         </Card.Meta>
        //         <Card.Description>
        //             {vijest.content}
        //         </Card.Description>
        //         <Card.Meta>
        //             <span>{vijest.tags.join(', ')}</span>
        //         </Card.Meta>
        //     </Card.Content>
        //     <Card.Content extra>
        //         <Button.Group widths={2}>
        //             <Button as={Link} to={`/azuriraj-vijest/${vijest.id}`} basic color="blue" content='Izmjeni' />
        //             <Button as={Link} to={'/vijesti'} basic color="red" content='Otkaži' />
        //         </Button.Group>
        //     </Card.Content>
        // </Card>
    )
})