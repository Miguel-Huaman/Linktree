import React from 'react';

function ButtonLink(props) {
    return (
        <button
            className='ButtonLink'
            onClick={
                function() {
                    window.open(props.link, 'self')
                }
            }
        >
            {props.text}
        </button>
    )
};

export default ButtonLink