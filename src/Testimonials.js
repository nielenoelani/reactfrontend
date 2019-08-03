import React from 'react';


const Testimonials = (prop) => {
    return (
        <div className = "Testimonials">
        
            <img src={prop.img}/>
            <h3>{prop.name}</h3>
            <p>{prop.caption}</p>
        </div>
    )
}

export default Testimonials;