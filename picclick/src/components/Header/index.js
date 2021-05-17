import React from 'react';
import './style.css';

function Header(props) {
    return (
        <nav className='navbar'>
            <div className='status'>A{props.status}</div>
            <div className='scores'>
            <span className='currScore'>Score: {props.currScore}</span>
            <span className='highScore'>High Score: {props.highScore}</span>
            </div>
        </nav>
    );
}

export default Header;