import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import HutbaDetailedHeader from "./HutbaDetailedHeader";
import HutbaDetailedSidebar from "./HutbaDetailedSidebar";
import HutbaDetailedInfo from "./HutbaDetailedInfo";
import HutbaDetailedContent from "./HutbaDetailedContent";


export default observer(function HutbaDetails() {

    const {hutbaStore} = useStore();
    const {selectedHutba: hutba, loadHutba, loadingInitial} = hutbaStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadHutba(id);
    }, [id, loadHutba])

    if (loadingInitial || !hutba) return <LoadingComponent />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <HutbaDetailedHeader hutba={hutba}/>
                <HutbaDetailedInfo hutba={hutba}/>
                <HutbaDetailedContent hutba={hutba}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <HutbaDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
})