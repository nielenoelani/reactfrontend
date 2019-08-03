import React from 'react';

const IconRow = (prop) => {
    return (
        <div className = "IconRow">
            <i className = {prop.iconClass}></i>
            <h3>{prop.title}</h3>
            <p>{prop.caption}</p>
        </div>
    )
}


const IconContainer = (prop) => {
    return (
        <div className = "IconContainer container-fluid">
            <div className = "container">
                {prop.children}
            </div>
        </div>
    )
}


export {IconRow, IconContainer};
