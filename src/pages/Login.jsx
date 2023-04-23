import React, { useState } from 'react';
import LoginRegisterText from '../components/LoginRegisterText';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(username, password));
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
