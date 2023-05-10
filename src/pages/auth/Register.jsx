import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      // Perform registration logic here

      const dataToSend = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        passwordConfirmation: formData.passwordConfirmation,
      };

      // Make the API request
      fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => {
          setIsLoading(false);
          if (response.ok) {
            window.location.href = '/home';
            return response.json();
          } else {
            throw new Error('Error registering user');
          }
        })

        .then((data) => {
          // Handle the API response data
          console.log('Registration successful:', data);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error('Error:', error);
        });
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = 'Username is required';
    } else if (data.username.length < 4) {
      errors.username = 'Username should be at least 6 characters long';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    }

    if (!data.passwordConfirmation.trim()) {
      errors.passwordConfirmation = 'Confirm password is required';
    } else if (data.passwordConfirmation !== data.password) {
      errors.passwordConfirmation = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label htmlFor="passwordConfirmation">Confirm Password:</label>
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleChange}
          />
          {errors.passwordConfirmation && (
            <span className="error">{errors.passwordConfirmation}</span>
          )}
        </div>
        <button className="updateButton" type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default Register;
