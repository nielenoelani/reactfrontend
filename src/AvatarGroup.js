import React from 'react';
import PropTypes from 'prop-types';


export const Avatar = (prop) => {
    return (
    <div className = "Avatar">
        <img src={prop.img}/>
        <p className = "title">{prop.title}</p>
        <p className = "caption">{prop.caption}</p>    
    </div>
    );
}

Avatar.propTypes = {
    img: PropTypes.string
}


export const AvatarGroup = (prop) => {
    return (
    <div className = "AvatarGroup">
        <p>{prop.children}</p>    
    </div>
    );
}

export default Avatar;