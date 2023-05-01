import React, { useEffect, useState } from 'react';
import LoginRegisterText from '@C/LoginRegisterText';
import { registerUser } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(username, password, name, email, navigate));
  };

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <h4 className="mb-4 text-muted">REGISTER</h4>
        <div className="mb-4">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <span>Email</span>
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="email"
              className="form-control"
              id="email" required
            />
          </div>
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
              id="username" required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <span>Name</span>
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="name"
              className="form-control"
              id="name" required
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
              id="password" required
            />
          </div>
        </div>
        <div className="mb-3 d-grid">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
      </form>
      <hr />
      <LoginRegisterText type="register" />
    </div>
  );
}
