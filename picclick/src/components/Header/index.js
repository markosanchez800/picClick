import React from 'react';
import './style.css';

function Header(props) {
    return (
        <nav className='navbar'>
            <ul>
            <li className='currScore'>Score: {props.currScore}</li>
            <li className='highScore'>High Score: {props.highScore}</li>
            <li className='status'>{props.message}</li>
            </ul>
        </nav>
    );
}

export default Header;