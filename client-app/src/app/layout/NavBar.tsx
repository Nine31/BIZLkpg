import { useEffect, useState } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        // setIsSticky(offset > 180);
        if (offset > 180) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="logo-container">
                <a href="/"><img src="/assets/Hutba_Slike/IZBULS.png" alt="logo" className="slika"/></a>
            </div>

            <Menu fixed={isSticky ? 'top' : undefined} className={`navbar ${isSticky ? 'sticky' : ''}`}>
                <Container>
                    <Menu.Item as={NavLink} to='/' name="Početna" icon='home' />
                    <Menu.Item as={NavLink} to='hutbe' name="Hutbe" icon='bullhorn' />
                    <Menu.Item name="Vijesti" icon='newspaper' />
                    <Menu.Item name="Događaji" icon='calendar alternate' />
                    <Menu.Item name="Aktivnosti" icon='tasks' />
                    <Menu.Item name="Vakuf" icon='university' />
                    <Menu.Item name="Ajeti" icon='book' />
                    <Menu.Item name="Hadisi" icon='quote left' />
                    <Menu.Item name="Dženaze" icon='leaf' />
                    <Menu.Item name="O nama" icon='info circle' />
                    <Menu.Item name="Kontakt" icon='phone' />
                    <Menu.Item name="Kalendar" icon='calendar' />
                    <Menu.Item>
                        <Button className="create-hutba" as={NavLink} to='kreiraj-hutbu' content='Kreiraj hutbu' />
                    </Menu.Item>
                </Container>
            </Menu>
        </>
    )
}