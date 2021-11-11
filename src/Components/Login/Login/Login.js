import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo/google-logo.png'
import './Login.css'
const Login = () => {
      const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError  } = useAuth();
  const location = useLocation();
  const history = useHistory();
//   const redirect_uri = location.state?.from || '/home'
//   const handleGoogleLogin = () => {
//     signInUsingGoogle()
//       .then(result => {
//       history.push(redirect_uri)
//     })
//   }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="login-form">
            <div className="form">
  
<img src={logo} alt="" />
          <h3 className="text-primary">Please Login</h3>                   
<form onSubmit={handleLoginSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address:</label>
    <input type="email" onChange={handleOnChange} placeholder="Your Email " className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" onChange={handleOnChange} placeholder="Password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
                    <br /><br />
  
        <button type="submit" className="btn btn-primary">
         Login
                    </button>
                    {isLoading &&   <Spinner animation="border" variant="success" />}
                        {user?.email && <Alert>Login Successfull!</Alert>}
                        {authError && <Alert>{authError}</Alert>}
                </form>
                <Link to="/register"><button>New user? Please do Register</button></Link>
<div>--------Or----------</div>
<button onClick={handleGoogleSignIn} className="btn-regular btn-primary mb-5">Google Sign In</button>
            </div>
            
        </div>
    );
};

export default Login;