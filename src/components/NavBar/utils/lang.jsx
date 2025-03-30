import React from 'react';
import CloseIcon from '@mui/icons-material/Close';


export default function Lang({ lang, setLang }) {

    return (
        <div style={{ display: 'flex', justifyContent: 'end' }} className='lang-form-div' >
            <div className='lang-form-span'><CloseIcon sx={{ height: '25px', width: '25px', color: '#158EE2' }} /></div>
        </div>

    );
}