import React from 'react';
import { Form } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN PAGE</h1>
      <Form method="POST" action="/login" className="login-form">
        <label htmlFor="username" className="login-label">Username</label>
        <input type="text" id="username" name="username" className="login-input" />
        
        <label htmlFor="password" className="login-label">Password</label>
        <input type="password" id="password" name="password" className="login-input" />
        
        <button type="submit" className="login-button">Login</button>
        <button type="button" className="signup-button">SignUp</button>
      </Form>
    </div>
  );
};

export default Login;