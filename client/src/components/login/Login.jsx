import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import LandingPage from '../LandingPage';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector((state) => state.auth);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(loginUser({ email, password }));
    };
  
    return (
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit"><Link to='/dashboard'>Login</Link></button>
        </form>
        <Link to='/register'><button>Register</button></Link>
        
      </div>
    );
  };
  
  export default Login;
  
  