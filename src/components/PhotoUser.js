import React from 'react';

function PhotoUser(props) {
    return (
        <img className="PhotoUser" src={props.src} alt={props.alt} />
    )
};

export default PhotoUser