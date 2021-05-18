import React from 'react';
import './style.css';


function GameCard(props){
    return (
        <div onClick={() => props.verifyClick(props.name)} className='card col-md-1.5'>
            <div className='img-container'>
                <img alt={props.name} src={props.image} /> 
            </div>
       </div>
    );
}

export default GameCard;