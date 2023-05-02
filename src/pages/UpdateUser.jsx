import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateUser() {
  const { id } = useParams();
  const [value, setValues] = useState({
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
      .then((res) => console.log(res))
      .catch();
  }, []);

  const token = localStorage.getItem('token');

  return (
    <div>
      <h2>User Update</h2>
      <form>
        <label>
          Name:
          <input type="text" name="username" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
