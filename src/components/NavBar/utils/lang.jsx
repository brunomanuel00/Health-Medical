import React, { useState } from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import spain from '../../../assets/Spain (ES).png';
import usa from '../../../assets/United States of America (US).png';
import CloseIcon from '@mui/icons-material/Close';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export default function Lang({ lang, setLang }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (event) => {
        setLang(event.target.value);
        setIsOpen(false);
        setIsOpen(prevState => !prevState);

    };

    const handleClick = (e) => {
        e.stopPropagation();
        setIsOpen(prevState => !prevState);
    };

    return (
        <FormControl className='lang-form' sx={{ minWidth: 120, display: 'block', color: '#626265' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Select
                    sx={{
                        '& .MuiSelect-select': {
                            padding: '8px 16px',
                            border: 'none',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '& .MuiSelect-icon': {
                            display: 'none',
                        },
                        backgroundColor: 'transparent',
                    }}
                    value={lang}
                    onChange={handleChange}
                    onClick={handleClick}
                    open={isOpen}
                    IconComponent={() => isOpen ? <ExpandLess /> : <ExpandMore />}
                    renderValue={(selected) => {
                        if (!selected) {
                            return (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={spain} alt="Spain" width={20} height={20} style={{ marginRight: 8 }} />
                                    <span>ES</span>
                                </div>
                            );
                        }

                        return (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src={selected === 'ES' ? spain : usa}
                                    alt={selected === 'ES' ? 'Spain' : 'USA'}
                                    width={20}
                                    height={20}
                                    style={{ marginRight: 8 }}
                                />
                                <span>{selected}</span>
                            </div>
                        );
                    }}
                >
                    <MenuItem sx={{ fontSize: '0.83em' }} value="ES">
                        <img src={spain} alt="Spain" width={20} height={20} style={{ marginRight: 8 }} />
                        <span>ES</span>
                    </MenuItem>
                    <MenuItem sx={{ fontSize: '0.83em' }} value="EN">
                        <img src={usa} alt="USA" width={20} height={20} style={{ marginRight: 8 }} />
                        <span>EN</span>
                    </MenuItem>
                </Select>
                <div><CloseIcon sx={{ height: '25px', width: '25px', color: '#158EE2' }} /></div>
            </div>
        </FormControl>
    );
}
