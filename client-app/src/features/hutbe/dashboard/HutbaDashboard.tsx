import { Grid } from "semantic-ui-react";
import HutbaList from "./HutbaList";
import HutbaDetails from "../details/HutbaDetails";
import HutbaForm from "../form/HutbaForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";


export default observer(function HutbaDashboard() {

    const {hutbaStore} = useStore();
    const {selectedHutba, editMode} = hutbaStore;

    return (
        <Grid>
            <Grid.Column width='10'>
                <HutbaList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedHutba && !editMode &&
                <HutbaDetails />}
                {editMode &&
                <HutbaForm />}
            </Grid.Column>
        </Grid>
    )
})