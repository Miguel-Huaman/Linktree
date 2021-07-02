import React from 'react';
import './TitleUser.css';

function TitleUser(props) {
    return (
        <h1 className="main__TitleUser">
            {props.username}
        </h1>
    )
};

export default TitleUser