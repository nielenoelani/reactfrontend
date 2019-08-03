import React, { useContext, useState } from 'react';
import { AppContext } from './Home'; 

const LogInWindow = () => {

    const [state, setState] = useContext(AppContext);

    const loginrUser = () => {
        let formData = {
            username: email.value,
            password: password.value
        }
        fetch(
            // URL
            `${process.env.REACT_APP_API_URL}auth/register`, 
            // Data
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': {"Content-Type" : 'application/json'}
                }
            }
        )
        
        .then(res => res.json())
        .then(ret => console.log('done,ret'))
    }
    
    //Store the JWT in localStorage
    
    
    const closeSignUp = () => {
        setState({ signUpForm: false })
    }
    return(<div className="LogInWindow">
        <div className="container">

            <label>Username</label>
            <input type="text" className="form-control" />

            <label>Password</label>
            <input type="text" className="form-control" />

            <button className="btn btn-primary">Register</button>
            <button onClick={closeSignUp} className="btn btn-danger">Cancel</button>
        </div>
    </div>)
}

export defaultLogInWindow;