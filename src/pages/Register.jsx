import React, { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email Address"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="passwordConfirmation"
        name="passwordConfirmation"
        value={passwordConfirmation}
        onChange={onChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
