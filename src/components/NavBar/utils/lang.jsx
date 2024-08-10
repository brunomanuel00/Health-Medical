import spain from '../../../assets/Spain (ES).png';
import usa from '../../../assets/United States of America (US).png'
import { Button, Menu, MenuItem } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export default function Lang({ lang, openDash, handleClickDash, handleCloseDash, anchorEl }) {
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={openDash ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openDash ? 'true' : undefined}
                onClick={handleClickDash}
                style={{ color: '#000' }}
                sx={{ margin: '4px' }}
            >
                <img src={spain} alt="spain" width={25} height={25} /><span style={{ margin: '4px' }}>ES</span>
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
                <MenuItem onClick={handleCloseDash}>
                    <img src={usa} alt="spain" width={25} height={25} /><span style={{ margin: '4px' }}>EN</span>
                </MenuItem>
            </Menu>
        </div>

    )

};
