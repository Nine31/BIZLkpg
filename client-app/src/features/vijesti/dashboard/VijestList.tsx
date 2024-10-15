import { Grid, Icon, Image, Label } from "semantic-ui-react";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export default observer(function VijestList() {
    const {vijestStore} = useStore();
    const {deleteVijest, vijestiByDate, loading} = vijestStore;

    const [target, setTarget] = useState('');

    function handleVijestDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteVijest(id);
    }

    return (
        <Grid columns={2}>
            <Grid.Row>
                {vijestiByDate.map((vijest) => (
                    <Grid.Column key={vijest.id} width={7}>
                        <Link to={`/vijesti/${vijest.id}`} className="hutba-link">
                            <div className="hutba-card">
                                <Image
                                    src={vijest.pictureUrl || '/assets/Vijest_Slike/News.jpg'}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <h3 className="hutba-title">
                                    {vijest.title}
                                </h3>
                                <span className="hutba-date">{vijest.publishedDate}</span>
                                <Icon name="eye" className="icon-views">&nbsp;
                                    {vijest.views}
                                </Icon> 
                                <Label 
                                    style={{position: 'absolute', marginLeft: 20}}
                                    ribbon
                                    color="green"
                                >
                                    {vijest.category}
                                </Label>
                                
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