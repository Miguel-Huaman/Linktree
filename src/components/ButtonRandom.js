import React from 'react';
import './ButtonRandom.css';
import Random from '../images/random.png'

function ButtonLink(props) {
    return (
        <div className='header' onClick={props.function}>
            <img src={ Random } alt='random' />
        </div>
    )
};

export default ButtonLink