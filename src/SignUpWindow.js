import React, { useContext } from 'react';
import { AppContext } from './Home'; 

const SignUpWindow = () => {

    let name;
    
    let email;
    
    let password;
    
    let gender;
    
    const [state, setState] = useContext(AppContext);

    const registerUser = () => {
        let formData = {
            name: name.value,
            email: email.value,
            password: password.value,
            gender: gender.value
        }
        fetch(
            // URL
            `${process.env.REACT_APP_API_URL}auth/register`, 
            // Data
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        
        .then(res => res.json())
        .then(ret => console.log('done,ret'))
    }
    const closeSignUp = () => {
        setState({ signUpForm: false })
    }
    return(<div className="SignUpWindow">
        <div className="container">

            <label>Name</label>
            <input ref={comp=>name = comp} type="text" className="form-control" />

            <label>Password</label>
            <input type="text" className="form-control" />

            <label>Email</label>
            <input type="text" className="form-control" />

            <label>Gender</label>
            <input type="text" className="form-control" />
            
            <button className="btn btn-primary">Register</button>
            <button onClick={closeSignUp} className="btn btn-danger">Cancel</button>
        </div>
    </div>)
}

export default SignUpWindow;