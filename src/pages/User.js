import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function User() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');
  const [updateState, setUpdateState] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      localStorage.getItem('token'); // get token from localStorage
      try {
        const response = await axios.get('http://localhost:8000/users/', {
          headers: {
            Authorization: `Bearer ${token}`, // set token in header
          },
        });
        setData(response.data);
        console.log('response from server', response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function deleteUser(id) {
    fetch(`http://localhost:8000/users/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result) => {
      result.json().then((respone) => {
        console.warn(respone);
      });
    });
  }

  return (
    <div className="table-container">
      <h1> User list</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} item={item}>
              <td>{item._id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/users/update/${item._id}`}>Edit</Link>
              </td>
              <td onClick={() => deleteUser(item._id)}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
