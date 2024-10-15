import { Grid, Segment } from "semantic-ui-react";
import VijestList from "./VijestList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import VijestIsFeatured from "./VijestIsFeatured";

export default observer(function VijestDashboard() {
    const {vijestStore} = useStore();
  
    useEffect(() => {
        vijestStore.loadVijesti();
    }, [vijestStore])

    if (vijestStore.loadingInitial) return <LoadingComponent content='Učitavanje vijesti...' />

    return (
        <Grid>
            <Grid.Column width={12}>
                <VijestList />
            </Grid.Column>
            <Grid.Column width={4}>
                <div>
                    <VijestIsFeatured />
                </div>
            </Grid.Column>
        </Grid>
    )
})