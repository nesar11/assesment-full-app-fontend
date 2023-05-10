import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UpdateUser.css';

function UpdateUser() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    username: '',
    email: '',
    isAdmin: '',
  });
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:8000/api/users/view/' + id, {
        headers: {
          Authorization: `Bearer ${token}`, // set token in header
        },
      })
      .then((res) => {
        setValues({
          ...values,
          username: res.data.username,
          email: res.data.email,
          isAdmin: res.data.isAdmin,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const token = localStorage.getItem('token');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:8000/api/users/update/' + id, values, {
        headers: {
          Authorization: `Bearer ${token}`, // set token in header
        },
      })
      .then((res) => {
        window.location.href = '/users';
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <h2>User Update</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <br />
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={values.username}
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
        </label>
        <br />
        <label>
          Email:
          <br />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Role:
          <br />
          <input
            type="text"
            name="isAdmin"
            placeholder="isAdmin"
            value={values.isAdmin}
            onChange={(e) => setValues({ ...values, isAdmin: e.target.value })}
          />
        </label>

        <button className="updateButton" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
