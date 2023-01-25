import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const history = useNavigate();

    console.log('We are in Route: ', location.pathname);


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => history('/profile')} className='btn btn-success'>
                Go to profile
            </button>
        </div>
    );
}

export default HomePage;
