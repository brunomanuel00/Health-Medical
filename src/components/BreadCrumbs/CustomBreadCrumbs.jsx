import * as React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import './CustomBreadCrumbs.css';

const routeNameMap = {
    'our-company': 'Nuestra Compañía',
    'why-us': 'Por qué nosotros',
    'our-services': 'Nuestos Servicios',
    'contact-us': 'Contáctanos',
};

export default function CustomBreadCrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const getCustomName = (pathname) => {
        return routeNameMap[pathname] ||
            pathname.charAt(0).toUpperCase() + pathname.slice(1);
    };

    return (
        <Box className='container-breadcrumbs' >
            <Breadcrumbs component={"div"}
                separator={<NavigateNextIcon className='breadcrumbs-text' fontSize="small" />}
                aria-label="breadcrumb"
            >
                <Link
                    component={RouterLink}
                    to="/"
                    underline="hover"
                    color="white"
                    className='breadcrumbs-text'
                    sx={{ display: 'flex', alignItems: 'center', marginRight: 3 }}
                >
                    <HomeIcon className='breadcrumbs-text' sx={{ mr: 0.5 }} fontSize="small" />
                    Home
                </Link>

                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const customName = getCustomName(value);

                    return isLast ? (
                        <Typography
                            key={to}
                            color="white"
                            className='breadcrumbs-text'
                            sx={{ display: 'flex', alignItems: 'center' }}
                        >
                            {customName}
                        </Typography>
                    ) : (
                        <Link
                            component={RouterLink}
                            to={to}
                            key={to}
                            underline="hover"
                            color="white"
                            className='breadcrumbs-text'
                            sx={{ display: 'flex', alignItems: 'center', marginRight: 3 }}
                        >
                            {customName}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </Box>
    );
}