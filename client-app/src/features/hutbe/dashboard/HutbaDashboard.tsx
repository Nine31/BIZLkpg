import { Grid } from "semantic-ui-react";
import HutbaList from "./HutbaList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";


export default observer(function HutbaDashboard() {
    const {hutbaStore} = useStore();
    
    // Kod ispod za prebacivanje na linkove u navbar da ne pokaziva loading
    // const {loadHutbe, hutbaRegistry} = hutbaStore;

    // useEffect(() => {
    //     if (hutbaRegistry.size <= 1) loadHutbe();
    // }, [loadHutbe])

    useEffect(() => {
        hutbaStore.loadHutbe();
    }, [hutbaStore])

    if (hutbaStore.loadingInitial) return <LoadingComponent content='Učitavanje hutbi...' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <HutbaList />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Sortiraj hutbe:</h2>
            </Grid.Column>
        </Grid>
    )
})