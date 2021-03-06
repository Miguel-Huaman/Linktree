import React from 'react';
import './ButtonRandom.css';
import SvgDice from '../images/dice'

function ButtonLink(props) {
    return (
        <div className='header__icon' onClick={props.function}>
            <SvgDice className='dice'/>
        </div>
    )
};

export default ButtonLink