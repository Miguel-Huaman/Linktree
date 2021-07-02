import React from 'react';

function TitleUser(props) {
    return (
        <h1 className="TitleUser">
            {props.username}
        </h1>
    )
};

export default TitleUser