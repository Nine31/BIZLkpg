import { Grid, Icon, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";

export default observer(function HutbaList() {
    const {hutbaStore} = useStore();
    const {deleteHutba, hutbeByDate, loading} = hutbaStore;

     const [target, setTarget] = useState('');

     function handleHutbaDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
         setTarget(e.currentTarget.name);
        deleteHutba(id);
    }

    return (
        <Grid columns={2}>
            <Grid.Row>
                {hutbeByDate.map((hutba) => (
                    <Grid.Column key={hutba.id} width={7}>
                        <Link to={`/hutbe/${hutba.id}`} className="hutba-link">
                            <div className="hutba-card">
                                <Image
                                    src={hutba.pictureUrl || '/assets/Hutba_Slike/Hutba-1.jpg'}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <h3 className="hutba-title">
                                    {hutba.title}
                                </h3>
                                <span className="hutba-date">{hutba.postedDate}</span>
                                <Icon name="eye" className="icon-views">&nbsp;
                                    {hutba.views}
                                </Icon> 
                                
                                {/* <div className="hutba-button">
                                    <Button className="citaj"
                                        as={Link}
                                        to={`/hutbe/${hutba.id}`}
                                        content="Čitaj"
                                        color="blue"
                                    />
                                    <Button className="izbrisi"
                                        loading={loading && target === hutba.id}
                                        name={hutba.id}
                                        content="Izbriši"
                                        color="red"
                                        onClick={(e) => handleHutbaDelete(e, hutba.id)}
                                    />
                                </div> */}
                            </div>
                        </Link>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>

        
    )
})


    
