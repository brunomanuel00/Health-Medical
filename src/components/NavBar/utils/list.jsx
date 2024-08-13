import React from 'react';
import { Box, List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Lang from './lang';

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
