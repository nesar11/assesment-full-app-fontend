import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
function User() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token'); // get token from localStorage
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

  return (
    <div>
      <h1> User list</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Updated</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item._id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                <Moment format="YYYY/MM/DD-hh:mm:ss">{data.createdAt}</Moment>
              </td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
