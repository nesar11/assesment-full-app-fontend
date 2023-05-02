import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './UpdateUser.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const { username, email, password, passwordConfirmation } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      username,
      email,
      password,
      passwordConfirmation,
    });

    try {
      const res = await axios.post(
        'http://localhost:8000/users/register',
        body,
        config
      );
      console.log(res.data);
      window.location.href = '/login';
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h2>Register form</h2>
        <label>
          User Name:
          <br />
          <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={onChange}
          />
        </label>
        <label>
          Email:
          <br />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </label>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <label>Password Confirmed</label>
        <input
          type="password"
          placeholder="passwordConfirmation"
          name="passwordConfirmation"
          massage="password is wong"
          value={passwordConfirmation}
          onChange={onChange}
        />

        <button className="updateButton" type="submit">
          Register
        </button>
        <br />
        <label>
          {' '}
          <Link to="/login"> login here</Link>
        </label>
      </form>
    </div>
  );
}

export default Register;
