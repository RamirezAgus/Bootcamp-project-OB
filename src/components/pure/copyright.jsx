import React from 'react';

//Material UI Component
import Link from '@mui/material/Link';
import Typhography from '@mui/material/Typography';

const Copyright = () => {
    return (
        <Typhography variant="body2" color="GrayText" align="center">
            { 'Copyright (C)' }
                <Link color="inherit" href='https://imaginaformacion.com'>
                    Imagina Formación
                </Link>
            { ' ' }
            { new Date().getFullYear() }    
        </Typhography>
    );
}

export default Copyright;
