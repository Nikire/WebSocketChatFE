import React, { useEffect, useState } from 'react';
import LoginRegisterText from '@C/LoginRegisterText';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/redux/actions';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_ORIGIN)
    dispatch(loginUser(username, password, navigate));
  };

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <h4 className="mb-4 text-muted">LOGIN</h4>
        <div className="mb-4">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <span>Username</span>
            </label>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="Username"
              className="form-control"
              id="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <span>Password</span>
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              className="form-control"
              id="password"
            />
          </div>
        </div>
        <div className="mb-3 d-grid">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
      <hr />
      <LoginRegisterText type="login" />
    </div>
  );
}
