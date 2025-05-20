import React from 'react';
import { Form } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">SignUp</h1>
      <Form method="POST" action="/SignUp" className="login-form">
        <label htmlFor="username" className="login-label">Username</label>
        <input type="text" id="username" name="username" className="login-input" />
        
        <label htmlFor="email" className="login-label">Email</label>
        <input type="email" id="email" name="email" className="login-input" />

        <label htmlFor="password" className="login-label">Password</label>
        <input type="password" id="password" name="password" className="login-input" />
        
        <button type="button" className="signup">Submit</button>
      </Form>
    </div>
  );
};

export default SignUp;
