import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function HomePage({ logged }) {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route: ', location.pathname);

    const navigatePathLogin = (path) => {
        alert('You must be logged in... Redirecting to login')
        navigate(path);
    };

    const navigatePathLogged = (path) => {
        alert('You are logged')
        navigate(path)
    };

    const navigateProps = (path) => {
        navigate({
            pathname: path,
            search: '?online-true',
            state: { referrer: true }
        })
    }

    const goBack = () => {
        navigate(-1);
    }

    const goForward = () => {
        navigate(1);
    }


    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={ logged ? () => navigatePathLogged('/profile') : () => navigatePathLogin('/profile')}>Got to Profile</button>
                <button onClick={() => goBack()}>Go Back</button>
                <button onClick={() => goForward()}>Go Forward</button>
                <button onClick={() => navigateProps('/online-state')}>Online State</button>
            </div>
        </div>
    );
}


