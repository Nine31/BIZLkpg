import { Grid } from "semantic-ui-react";
import { Hutba } from "../../../app/models/hutba";
import HutbaList from "./HutbaList";
import HutbaDetails from "../details/HutbaDetails";
import HutbaForm from "../form/HutbaForm";

interface Props {
    hutbe: Hutba[];
    selectedHutba: Hutba | undefined;
    selectHutba: (id: string) => void;
    cancelSelectHutba: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (hutba: Hutba) => void;
    deleteHutba: (id: string) => void;
    submitting: boolean;
}

export default function HutbaDashboard({hutbe, selectedHutba, selectHutba, cancelSelectHutba, 
        editMode, openForm, closeForm, createOrEdit, deleteHutba, submitting}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <HutbaList hutbe={hutbe} 
                    selectHutba={selectHutba} 
                    deleteHutba={deleteHutba} 
                    submitting={submitting}   
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedHutba && !editMode &&
                <HutbaDetails 
                    hutba={selectedHutba} 
                    cancelSelectHutba={cancelSelectHutba}
                    openForm={openForm}    
                />}
                {editMode &&
                <HutbaForm 
                    closeForm={closeForm} 
                    hutba={selectedHutba} 
                    createOrEdit={createOrEdit}
                    submitting={submitting}
                />}
            </Grid.Column>
        </Grid>
    )
}