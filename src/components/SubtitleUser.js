import React from 'react';
import './SubtitleUser.css';

function SubtitleUser(props) {
    return (
        <h3 className="main__SubtitleUser">
            {props.userBio}
        </h3>
    )
};

export default SubtitleUser