import React, { useState } from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import spain from '../../../assets/Spain (ES).png';
import usa from '../../../assets/United States of America (US).png';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export default function LangFooter({ lang, setLang }) {
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
        <FormControl sx={{ minWidth: 90, display: 'block', color: '#626265' }}>
            <div className='lang-form-footer-div' >
                <Select
                    className='footer-select'
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
                        textAlign: 'center',
                        // minWidth: '40px',
                        // maxWidth: '45px',
                        // color: ' #fff'
                    }
                    }
                    value={lang}
                    onChange={handleChange}
                    onClick={handleClick}
                    open={isOpen}
                    IconComponent={() => isOpen ? <ExpandLess /> : <ExpandMore />}
                    renderValue={(selected) => {
                        if (!selected) {
                            return (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img className='lang-form-selected' src={spain} alt="Spain" width={20} height={20} style={{ marginRight: 8 }} />
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
                            </div>
                        );
                    }}
                >
                    <MenuItem value="ES">
                        <img src={spain} alt="Spain" width={20} height={20} style={{ marginRight: 8 }} />
                    </MenuItem>
                    <MenuItem value="EN">
                        <img src={usa} alt="USA" width={20} height={20} style={{ marginRight: 8 }} />
                    </MenuItem>
                </Select>
            </div>
        </FormControl>
    );
}