import React from 'react';
import './PhotoUser.css';

function PhotoUser(props) {
    return (
        <img className="main__PhotoUser" src={props.src} alt={props.alt} />
    )
};

export default PhotoUser