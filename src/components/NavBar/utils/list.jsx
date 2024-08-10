import React from 'react';
import { Box, List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Lang from './lang';

export function ListMenu({ open, toggleDrawer, handleClick, colorR, lang, openDash, handleClickDash, anchorEl, handleCloseDash }) {
    return (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <Lang
                    lang={lang}
                    openDash={openDash}
                    handleClickDash={handleClickDash}
                    handleCloseDash={handleCloseDash}
                    anchorEl={anchorEl}
                />
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
}


export function ListSimple() {

}

