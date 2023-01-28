import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = () => {

const location = useLocation();

    console.log('location', location);
    console.log('location', location.state); // State sent.
    console.log('Query Params', location.search); // QueryParams sent.

    return (
        <div>
            <h1>State: { location.state ? 'The User is Online' : 'The User is Offline' }</h1>
            <h1>Query State Params: { location.search ? 'The User is Online' : 'The User is Offline' }</h1>
        </div>
    );
}

export default StatePage;
