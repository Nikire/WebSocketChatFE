import React from 'react';
import LoginRegisterText from '../components/LoginRegisterText';
export default function Login() {
  return (
    <div className="login-box">
      <form>
        <h4 className="mb-4 text-muted">REGISTER</h4>
        <div className="mb-4">
          <div class="mb-3">
            <label for="username" className="form-label">
              <span>Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              class="form-control"
              id="username"
            />
          </div>
          <div class="mb-3">
            <label for="password" className="form-label">
              <span>Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              class="form-control"
              id="password"
            />
          </div>
        </div>
        <div class="mb-3 d-grid">
          <button type="submit" class="btn btn-primary">
            Sign up
          </button>
        </div>
      </form>
      <hr />
      <LoginRegisterText type="register" />
    </div>
  );
}
