import React, { useState } from "react";
import './NavBar.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import logo from '../../assets/company.png';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { ListMenu } from './utils/list';

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState('ES');

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMenu(open);
        if (!open) {
            setOpen(false);
        }
    };

    const handleClick = (e) => {
        e.stopPropagation();
        setOpen(!open);
    };

    function colorR() {
        return open ? '#158EE2' : '#626265';
    }

    return (
        <>
            <header className="health-navbar-header">
                <nav className="health-navbar-nav">
                    <div className="health-navbar-logo">
                        <img src={logo} alt="MoyaMedical" height={35} width={200} />
                    </div>
                    <div className="health-navbar-menu">
                        <Button sx={{ marginRight: '-20px' }} onClick={toggleDrawer(true)}>
                            <DehazeIcon sx={{ color: '#fff', height: '25px', width: '25px' }} />
                        </Button>
                        <SwipeableDrawer
                            className="health-navbar-menu-drawer"
                            anchor={'right'}
                            open={menu}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                        >
                            <ListMenu
                                open={open}
                                toggleDrawer={toggleDrawer}
                                handleClick={handleClick}
                                colorR={colorR}
                                lang={lang}
                                setLang={setLang} // Pasamos setLang para manejar el idioma
                            />
                        </SwipeableDrawer>
                    </div>
                </nav>
            </header>
        </>
    );
}
