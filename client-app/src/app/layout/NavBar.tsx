import { useEffect, useState } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
    
    const {hutbaStore} = useStore();
    const [isSticky, setIsSticky] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
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
                <img src="/assets/Hutba_Slike/IZBULS.png" alt="logo" className="slika"/>
            </div>

            <Menu fixed={isSticky ? 'top' : undefined} className={`navbar ${isSticky ? 'sticky' : ''}`}>
                <Container>
                    <Menu.Item name="Početna" icon='home' />
                    <Menu.Item name="Hutbe" icon='bullhorn' />
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
                        <Button onClick={() => hutbaStore.openForm()} positive content='Kreiraj hutbu' />
                    </Menu.Item>
                </Container>
            </Menu>
        </>
    )
}