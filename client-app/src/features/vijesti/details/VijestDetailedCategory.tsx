import { observer } from "mobx-react-lite";
import { List, Header, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useStore } from "../../../app/stores/store";
import { useEffect } from "react";

export default observer(function VijestDetailedCategory() {
    const { vijestStore } = useStore();
    const { kategorije, vijestRegistry, loadVijesti} = vijestStore;

    useEffect(() => {
        if (kategorije.length === 0) {
            loadVijesti();
        }
    }, [kategorije.length, loadVijesti]);

    if (!kategorije || kategorije.length === 0) return <p>Trenutno nema kategorija za pokazati</p>;

    return (
        <>
            <List>
            <Header className="kategorije">Kategorije</Header>
            <Divider style={{ borderTop: '2px solid rgba(0, 117, 60)'}}></Divider>
                {kategorije.map((category) => (
                    <List.Item key={category} className="kategorije-link">
                        <Link to={`/vijesti/kategorija/${category}`} className="kategorije-text">
                            {category} ({Array.from(vijestRegistry.values()).filter(v => v.category === category).length})
                        </Link>
                    </List.Item>
                ))}
            </List>
        </>
    );
});
