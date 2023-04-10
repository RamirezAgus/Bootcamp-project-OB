import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Copyright from '../../components/pure/copyright';

const Dashboard = () => {
    const navigate = useNavigate();
    
    const logout = () => {
        navigate('/login')
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>Log Out</Button>
            <Outlet/>
            <Copyright/>
        </div>
    );
}

export default Dashboard;
