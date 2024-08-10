import React, { useState } from "react"
import './NavBar.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import logo from '../../assets/company.png';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { ListMenu } from './utils/list';

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openDash = Boolean(anchorEl);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        if (!open) {
            setOpen(false);
        }
        setMenu(open);
    };

    const handleClick = (e) => {
        e.stopPropagation();
        colorR();
        setOpen(!open);
    };

    function colorR() {
        return open ? '#158EE2' : '#000';
    }

    const handleClickDash = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
        setLang(true);
    };

    const handleCloseDash = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
        setLang(false);
    };

    return (
        <>
            <header className="health-navbar-header">
                <nav className="health-navbar-nav">
                    <div className="health-navbar-logo">
                        <img src={logo} alt="MoyaMedical" height={43} width={250} />
                    </div>
                    <div className="health-navbar-menu">
                        <Button onClick={toggleDrawer(true)}>
                            <DehazeIcon sx={{ color: '#fff', height: '40px', width: '40px' }} />
                        </Button>
                        <SwipeableDrawer
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
                                openDash={openDash}
                                handleClickDash={handleClickDash}
                                anchorEl={anchorEl}
                                handleCloseDash={handleCloseDash}
                            />
                        </SwipeableDrawer>
                    </div>
                </nav>
            </header>
        </>
    )
}
