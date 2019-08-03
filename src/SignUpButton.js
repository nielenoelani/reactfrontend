import React, {useContext} from 'react';
import Button from "./Button";
import {AppContext} from "./Home";




// Note:
// Use 'useContext' if outside JSX
// use 'AppContext.Consumer' if inside JSX



const SignUpButton = (prop) => {
    // useContext will give the values from context
    const [state, setState] = useContext(AppContext);
    const openWindow = () => {
        setState({signUpForm:true});
    
    
    }
    
    // AppContext.Consumer will give you value from context in JSX
    return (
         <Button clickFunction={openWindow} className="link">{prop.children}</Button>
    )
}

export default SignUpButton;
