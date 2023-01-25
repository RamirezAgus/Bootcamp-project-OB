import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {

    const location = useLocation();

    console.log('We are in Route', location.pathname);



    return (
        <div>
            <section>
                <div>
                    <h1 >Links: </h1>
                    <nav>
                        <Link to='/'> | HOME | </Link>
                        <Link to='about'> | ABOUT |</Link>
                        <Link to='profile'> |PROFILE| </Link>
                        <Link to='faq'> | FAQ | </Link>
                        <Link to='tasks'>To Do List</Link>
                    </nav>
                </div>
            </section>
            
        </div>
    );
}

export default NavigationBar;
