
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                    {/* <li><Link to="/">Home</Link></li> */}
                    {/* <div>
                        <img src={myPhoto} alt="My photo" style={{ width: '300px', height: 'auto' }} />
                    </div> */}
                <li><a href="/recipes">Recipes</a></li>
                    {/* <li><Link to="/recipes">Recipes</Link></li> */}
                <li><a href="/random">Random</a></li>
                    {/* <li><Link to="/random">Random</Link></li> */}
            
            </ul>
        </nav>
    );
};


export default Navigation; // Added to export all components