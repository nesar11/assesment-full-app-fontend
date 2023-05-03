import React, { useState } from 'react';
import axios from 'axios';
import './UpdateUser.css';
import { Link } from 'react-router-dom';
const APIURL = process.env.REACT_APP_API_URL;

// new
function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${APIURL}users/login`, values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      localStorage.setItem('token', res.data);
      window.location.href = '/users';
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <div>
          {' '}
          <h2>Login </h2>
          <label>
            Email:
            <br />
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>
            Password: <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </label>
        </div>
        <button className="updateButton" type="submit">
          Login
        </button>
        <br />
        <label>
          {' '}
          <Link to="/register">Create new Account</Link>
        </label>
      </form>
    </div>
  );
}

export default Login;
