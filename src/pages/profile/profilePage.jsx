import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <Link to='/tasks' className='btn btn-success'>Tasks</Link>
            <Link to='/' className='btn btn-warning'>Go back</Link>
        </div>
    );
}

export default ProfilePage;
