import React from 'react';
import './SubtitleUser.css';

function SubtitleUser(props) {
    return (
        <h3 className="SubtitleUser">
            {props.userBio}
        </h3>
    )
};

export default SubtitleUser