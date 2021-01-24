import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/Login.css";
import { auth } from '../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  const signIn = e =>{
    console.log('sign in btn pressed' + email +password);
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      console.log(auth);
      if(auth){
        history.push('/');
      }
    }).catch((error) => alert(error.message));
  }

  const register = e =>{
    console.log('log in btn pressed' + email +password);
    e.preventDefault();
    auth.createUserWithEmailAndPassword
    (email, password).then((auth) => {
      console.log(auth);
      if(auth){
        history.push('/');
      }
    }).catch((error) => alert(error.message));
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/800px-Amazon.com-Logo.svg.png"
          alt="Amazon Logo"
        ></img>
        </Link>
      
      <div className='login_container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text'value={email} 
          onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input type='password'value={password} 
          onChange={e => setPassword(e.target.value)}
          />
          <button 
          className='login_button'
          onClick={signIn}
          >Sign In</button> 
        </form>
        <p>By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and Privacy Notice.</p>
        <button className='signup_button'
        onClick={register}
        >Create your Amazon account</button>
      </div>
</div>
  );
}

export default Login;
