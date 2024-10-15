import { Header, Image, List } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const IstaknuteVijesti = observer(() => {
    const { vijestStore } = useStore();
    const { vijestiByDate } = vijestStore;

    // Filtriramo istaknute vijesti
    const istaknuteVijesti = vijestiByDate
        .filter(vijest => vijest.isFeatured)
        .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

    return (
        <div>
            <div>
                <Header className="istaknute-vijesti-rubrika">Istaknute vijesti</Header>
            </div>
            <div style={{ paddingTop: '10px' }}>
                {istaknuteVijesti.length === 0 ? (
                    <p className="istaknute-vijesti-rubrika">Nema istaknutih vijesti.</p>
                ) : (
                    <List divided relaxed>
                        {istaknuteVijesti.map(vijest => (
                            <List.Item key={vijest.id} style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
                                <Image
                                    src={vijest.pictureUrl || '/assets/Hutba_Slike/Hutba-1.jpg'}
                                    size="tiny"
                                    style={{ marginRight: '15px', objectFit: 'cover', height: '60px', width: '60px', filter: 'brightness(150%' }}
                                />
                                <List.Content>
                                    <List.Header>
                                        <Link to={`/vijesti/${vijest.id}`} className="istaknute-vijesti-naslov">
                                            {vijest.title}
                                        </Link>
                                    </List.Header>
                                    <List.Description className="istaknute-vijesti-datum">
                                        {vijest.publishedDate}
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                        ))}
                    </List>
                )}
            </div>
        </div>
    );
    

    // return (
    //     <>
    //     <div>
    //         <div
    //             style={{ textAlign: 'center', padding: '15px', borderBottom: '1px solid rgba(0, 117, 60)' }}>
    //             <Header className="istaknute-vijesti-rubrika">Istaknute vijesti</Header>
    //         </div>
    //         <div style={{ padding: '10px' }}>
    //             {istaknuteVijesti.length === 0 ? (
    //                 <p className="istaknute-vijesti-rubrika">Nema istaknutih vijesti.</p>
    //             ) : (
    //                 istaknuteVijesti.map(vijest => (
    //                     <div key={vijest.id}>
    //                         <List.Item style={{ position: 'relative' }}>
    //                         <Link to={`/vijesti/${vijest.id}`}>
    //                             <Image size="tiny" 
    //                                 src={vijest.pictureUrl || '/assets/Hutba_Slike/Hutba-1.jpg'} 
    //                                 style={{ height: '70px', width: '200px', objectFit: 'cover' }}  
    //                             />
    //                         </Link>
    //                             <List.Content>
    //                                 <List.Header>
    //                                     <Link to={`/vijesti/${vijest.id}`} className="istaknute-vijesti-naslov">
    //                                         {vijest.title}
    //                                     </Link>
    //                                 </List.Header>
    //                                 <List.Description className="istaknute-vijesti-datum">
    //                                     {vijest.publishedDate}
    //                                 </List.Description>
    //                             </List.Content>
    //                         </List.Item>
    //                         <Divider /> {/* Divider za razdvajanje svake vesti */}
    //                     </div>
    //                 ))
    //             )}
    //         </div>
    //     </div>
    //     </>
    // );


    // return (
    //     <Grid.Column>
    //         <h3>Istaknute Vijesti</h3>
    //         {istaknuteVijesti.length === 0 ? (
    //             <p>Nema istaknutih vijesti za prikaz.</p>
    //         ) : (
    //             <Grid>
    //                 {istaknuteVijesti.map((vijest) => (
    //                     <Grid.Row key={vijest.id}>
    //                         <Grid.Column>
    //                             <Link to={`/vijesti/${vijest.id}`} className="hutba-link">
    //                                 <div className="hutba-card">
    //                                     <Image
    //                                         src={vijest.pictureUrl || '/assets/Vijest_Slike/News.jpg'}
    //                                         style={{ height: '100px', objectFit: 'cover' }}
    //                                     />
    //                                     <h4 className="hutba-title">
    //                                         {vijest.title}
    //                                     </h4>
    //                                     <Icon name="eye" className="icon-views">&nbsp;
    //                                         {vijest.views}
    //                                     </Icon>
    //                                     <Label
    //                                         style={{ position: 'absolute', marginLeft: 20 }}
    //                                         ribbon
    //                                         color="red"
    //                                     >
    //                                         {vijest.category}
    //                                     </Label>
    //                                 </div>
    //                             </Link>
    //                         </Grid.Column>
    //                     </Grid.Row>
    //                 ))}
    //             </Grid>
    //         )}
    //     </Grid.Column>
    // );
});

export default IstaknuteVijesti;
