import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateUser() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    username: '',
    email: '',
  });
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:8000/users/view/' + id, {
        headers: {
          Authorization: `Bearer ${token}`, // set token in header
        },
      })
      .then((res) => {
        setValues({
          ...values,
          username: res.data.username,
          email: res.data.email,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const token = localStorage.getItem('token');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:8000/users/update/' + id, values, {
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
    <div>
      <h2>User Update</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={values.username}
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
