import React from 'react';

function ButtonLink(props) {
    return (
        <button className='ButtonRandom' onClick={props.function}>
            {props.text}
        </button>
    )
};

export default ButtonLink