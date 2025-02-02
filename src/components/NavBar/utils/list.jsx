import React, { useState } from 'react';
import { Box, List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Lang from './lang';
import { Link } from 'react-router-dom';

export function ListMenu({ open, toggleDrawer, handleClick, colorR, lang, setLang }) {
    return (
        <Box
            sx={{ width: 300, color: '#626265' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}

        >
            <List>
                <Lang lang={lang} setLang={setLang} />
                <ListItemButton onClick={handleClick} sx={{ color: colorR }} >
                    <ListItemText primary="Nuestra Compañía" />
                    <div>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </div>
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Link className='link-modal' to="/our-company">Moyal Medical</Link>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Link className='link-modal' to="/our-company/why-us">Por qué nosotros</Link>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Link className='link-modal' to="/our-company/location-map">Ubicación en el mapa</Link>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton>
                    <Link className='link-modal' to="/our-services">
                        Nuestros Servicios
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <Link className='link-modal' to="/contact-us">
                        Contáctanos
                    </Link>
                </ListItemButton>
            </List>
        </Box>
    );
}


export function ListMenuSimple() {
    const [lang, setLang] = useState('ES');

    return (
        <div className='health-navbar-menu-simple'>
            <ul className='health-navbar-menu-simple-ul'>
                <li className="dropDown">
                    Nuestra Compañía
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/our-company">Moyal Medical</Link>
                        </li>
                        <li>
                            <Link to="/our-company/why-us">Por qué nosotros</Link>
                        </li>
                        <li>
                            <Link to="/our-company/location-map">Ubicación en el mapa</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/our-services">
                        Nuestros Servicios
                    </Link>
                </li>
                <li>
                    <Lang lang={lang} setLang={setLang} />
                </li>
                <li>
                    <Link to="/contact-us">
                        Contáctanos
                    </Link>
                </li>
                <li>
                    <Link to="/patient-portal">
                        Portal de pacientes
                    </Link>
                </li>
            </ul>
        </div>
    )
}
