import React, {useState} from 'react';
import Button from './Button'



const Jumbotron = (prop) => {
    const [registered, setRegistered] = useState(false);


    const registerUser = () => {
        setRegistered(true);
  }
    return (
      <div className="Jumbotron jumbotron"
       style={{backgroundImage: `url('${prop.img}')` }}>
        <div className="container">
            <div className="row">
                <div className="col-xl-7 mx-auto">
                  <h1>This is the jumbotron</h1>
                  <div className="form-row align-items-center">
                      <div className="col">
                        <input className="form-control" type="text" />
                      </div>
                      <div className="col-auto">
                        <Button clickFunction={registerUser}>Sign up!</Button>
                      </div>
                  </div>
                    <br/>
                    {
                    registered && 
                    <div className="alert alert-success">
                        Congratulations! Successful Registration
                    </div>
                    }
                 </div>
                </div>
            </div>
        </div>
    )
  }










export default Jumbotron;