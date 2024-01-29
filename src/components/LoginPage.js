import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Move useNavigate outside the component

  const handleLogin = () => {
    // Make an HTTP request to your authentication web service
    axios.post('https://annoncevoiture-production.up.railway.app/annonce/signinadmin', { mail : username, motDePasse : password })
      .then(response => {
        console.log(response);
        if (response) {
          navigate('/home');
        }
      })
      .catch(error => {
        setError('An error occurred while logging in. Please try again later.');
      });
  };

  return (
    <div className="LoginPage">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
