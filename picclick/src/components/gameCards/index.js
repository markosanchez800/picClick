import React from 'react';
import './style.css';

function gameCard(props){
    return (
        <div className='card'>
            <div className='img-container'>
                <img alt={props.name} src={props.image}/> 
            </div>
        </div>
    );
}

export default gameCard;