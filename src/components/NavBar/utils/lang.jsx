import React from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import spain from '../../../assets/Spain (ES).png';
import usa from '../../../assets/United States of America (US).png';
import CloseIcon from '@mui/icons-material/Close';

export default function Lang({ lang, setLang }) {
    const handleChange = (event) => {
        setLang(event.target.value);
    };

    function handleClick(e) {
        e.stopPropagation();
    }

    return (
        <FormControl variant="outlined" sx={{ margin: '4px', minWidth: 120, display: 'block' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Select
                    value={lang}
                    onChange={handleChange}
                    onClick={handleClick}
                    displayEmpty
                    renderValue={(selected) => {
                        if (!selected) {
                            return (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={spain} alt="Spain" width={25} height={25} style={{ marginRight: 8 }} />
                                    <span>ES</span>
                                </div>
                            );
                        }

                        return (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src={selected === 'ES' ? spain : usa}
                                    alt={selected === 'ES' ? 'Spain' : 'USA'}
                                    width={25}
                                    height={25}
                                    style={{ marginRight: 8 }}
                                />
                                <span>{selected}</span>
                            </div>
                        );
                    }}
                >
                    <MenuItem value="ES">
                        <img src={spain} alt="Spain" width={25} height={25} style={{ marginRight: 8 }} />
                        <span>ES</span>
                    </MenuItem>
                    <MenuItem value="EN">
                        <img src={usa} alt="USA" width={25} height={25} style={{ marginRight: 8 }} />
                        <span>EN</span>
                    </MenuItem>
                </Select>
                <div><CloseIcon sx={{ height: '30px', width: '30px', color: '#158EE2' }} /></div>
            </div>
        </FormControl>
    );
}
