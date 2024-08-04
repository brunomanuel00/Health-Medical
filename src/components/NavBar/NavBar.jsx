import React, { useState } from "react"
import './NavBar.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import logo from '../../assets/company.png';
import spain from '../../assets/Spain (ES).png'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, Menu, MenuItem } from "@mui/material";

export default function Navbar() {
    const [menu, setMenu] = useState(false)
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const openDash = Boolean(anchorEl);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        if (!open) {
            setOpen(false)
        }
        setMenu(open);
    };


    const handleClick = (e) => {
        e.stopPropagation()
        colorR();
        setOpen(!open);
    };

    function colorR() {
        if (open) {
            return '#158EE2'
        }
        return '#000'
    }

    const handleClickDash = (event) => {
        event.stopPropagation()
        setAnchorEl(event.currentTarget);
        setLang(true)
    };
    const handleCloseDash = (event) => {
        event.stopPropagation()
        setAnchorEl(null);
        setLang(false)
    };

    const list = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openDash ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openDash ? 'true' : undefined}
                        onClick={handleClickDash}
                    >
                        <img src={spain} alt="spain" width={25} height={25} />
                        {lang ? <ExpandLess /> : <ExpandMore />}
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openDash}
                        onClose={handleCloseDash}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleCloseDash}>Profile</MenuItem>
                        <MenuItem onClick={handleCloseDash}>My account</MenuItem>
                        <MenuItem onClick={handleCloseDash}>Logout</MenuItem>
                    </Menu>

                </div>
                <ListItemButton onClick={handleClick} sx={{ color: colorR }} >
                    <ListItemText primary="Nuesta Compañía" />
                    <div>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </div>

                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 2 }}>
                            <ListItemText primary="Moya Medical" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 2 }}>
                            <ListItemText primary="Por qué nosotros" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 2 }}>
                            <ListItemText primary="Ubicación en el mapa" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton>
                    <ListItemText primary="Nuestros Servicios" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Contáctanos" />
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <>
            <header className="health-navbar-header">
                <nav className="health-navbar-nav">
                    <div className="health-navbar-logo">
                        <img src={logo} alt="MoyaMedical" height={43} width={250} />
                    </div>
                    <div className="health-navbar-menu">
                        <Button onClick={toggleDrawer(true)}><DehazeIcon sx={{ color: '#fff', height: '40px', width: '40px' }} /></Button>
                        <SwipeableDrawer
                            anchor={'right'}
                            open={menu}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                        >
                            {list()}
                        </SwipeableDrawer>
                    </div>

                </nav>
            </header>
        </>
    )
}