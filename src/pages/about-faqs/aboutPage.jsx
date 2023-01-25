import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    const history = useNavigate();

    console.log('We are in Route: ', location.pathname);

    const goBack = () => {
        history(-1);
    }

    const goForward = () => {
        history(+1);
    }

    return (
        <div>
            <h1>About | FAQs Page</h1>
            <button onClick={() => history('/')} className='btn btn-success'>
                Go to Home
            </button>
            <button onClick={ goBack } className='btn btn-success'>
                Go Back
            </button>
            <button onClick={ goForward } className='btn btn-success'>
                Go Forward
            </button>
        </div>
    );
}

export default AboutPage;
