import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo/google-logo.png'


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // if (loginData.password !== loginData.password2) {
        //     alert('Your password did not match');
        //     return
        // }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="login-form">
            <div className="form">
  
<img src={logo} alt="" />
          <h3 className="text-primary">Please Register</h3>                   
<form onSubmit={handleLoginSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Your Name:</label>
    <input type="text" onBlur={handleOnBlur} placeholder="Your Name " className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address:</label>
    <input type="email" onBlur={handleOnBlur} placeholder="Your Email " className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Enter Password:</label>
    <input type="password" onBlur={handleOnBlur} placeholder="Password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  
                    <br /><br />
  
        <button type="submit" className="btn btn-primary">
        Please Register
                    </button>
                    {isLoading &&   <Spinner animation="border" variant="success" />}
                        {user?.email && <Alert>User Created successfully!</Alert>}
                        {authError && <Alert>{authError}</Alert>}
                </form>
                <Link to="/login"><button>Already Registered? Please Login</button></Link>

            </div>
            
        </div>
    );
};

export default Register;