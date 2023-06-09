import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UpdateUser.css';
import Moment from 'react-moment';

function User() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');
  const APIURl = process.env.REACT_APP_API_URL;
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      localStorage.getItem('token'); // get token from localStorage
      try {
        const response = await axios.get(`${APIURl}api/users`, {
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
    fetch(`${APIURl}users/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result) => {
      result.json().then((respone) => {
        console.warn(respone);
        window.location.href = '/users';
      });
    });
  }

  return (
    <div className="table-container">
      <div className="search-section">
        <div className="search-form">
          <input
            type="text"
            placeholder="Search.."
            className="search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <h2> User list</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Updated</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => item.username.toLowerCase().includes(query))
            .map((item) => (
              <tr key={item.id} item={item}>
                <td>{item._id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{String(item.isAdmin)}</td>
                <td>{String(item.isActive)}</td>
                <td>
                  <Moment format="YYYY-MM-DD HH:mm A">{item.createdAt}</Moment>
                </td>
                <td>
                  <Link to={`/users/update/${item._id}`}>Edit</Link>
                </td>
                <td
                  className="delelePointer"
                  onClick={() => deleteUser(item._id)}
                >
                  Delete
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
