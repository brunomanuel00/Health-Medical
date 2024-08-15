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
                            <ListItemText primary="Moya Medical" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Por qué nosotros" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
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
}


export function ListMenuSimple() {
    const [lang, setLang] = useState('ES');

    return (
        <div className='health-navbar-menu-simple'>
            <ul className='health-navbar-menu-simple-ul'>
                <li>
                    <Link to='/ourcompany'>
                        Nuestra Compañía
                    </Link>
                </li>
                <li>
                    <Link>
                        Nuestros Servicios
                    </Link>
                </li>
                <li>
                    <Lang lang={lang} setLang={setLang} />
                </li>
                <li>
                    <Link>
                        Contáctanos
                    </Link>
                </li>
                <li>
                    <Link>
                        Portal de pacientes
                    </Link>
                </li>
            </ul>
        </div>
    )
}
