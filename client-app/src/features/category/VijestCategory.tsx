import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { Header, Grid, Image, Icon, Label } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { Vijest } from "../../app/models/vijest";

const VijestiPoKategoriji = observer(() => {
    const { vijestStore } = useStore();
    const { kategorija } = useParams<{ kategorija: string }>(); // Uzimanje parametra iz URL-a

    // Filtriranje vijesti prema kategoriji
    const vijesti = Array.from(vijestStore.vijestRegistry.values()).filter(v => v.category === kategorija);

    return (
        <Grid columns={2}>
            <Header as="h2">Vijesti u kategoriji: </Header>
            <span className="vijesti-u-kategoriji">{kategorija}</span>
            {vijesti.length === 0 ? (
                <p>Nema vijesti za ovu kategoriju.</p>
            ) : (
                <Grid.Row>
                    {vijesti.map((vijest: Vijest) => (
                        <Grid.Column key={vijest.id} width={16}>
                            <Link to={`/vijesti/${vijest.id}`} className="hutba-link">
                                <div className="hutba-card">
                                    <Image
                                        src={vijest.pictureUrl || '/assets/Vijest_Slike/News.jpg'}
                                        style={{ height: '400px', objectFit: 'cover' }}
                                    />
                                    <h3 className="hutba-title">{vijest.title}</h3>
                                    <span className="hutba-date">{vijest.publishedDate}</span>
                                    <Icon name="eye" className="icon-views">
                                        &nbsp;{vijest.views}
                                    </Icon>
                                    <Label
                                        className="custom-ribbon"
                                        style={{ position: 'absolute', marginLeft: 20 }}
                                        ribbon
                                        color="yellow"
                                        
                                    >
                                        {vijest.category}
                                    </Label>
                                </div>
                            </Link>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            )}
        </Grid>
    );
});

export default VijestiPoKategoriji;
