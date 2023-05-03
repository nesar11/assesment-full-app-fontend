import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import './Post.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const APIURL = process.env.REACT_APP_API_URL;

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${APIURL}posts/search/${searchQuery}`);
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-section">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-Button" type="submit">
          Search
        </button>
      </form>
      {data.length > 0 && (
        <ul>
          {data.map((result) => (
            <div className="card">
              <div className="container">
                <div key={result.id}>
                  <img
                    className="post-image"
                    width={315}
                    src={result.image}
                    alt={result.name}
                  />
                  <h4> {result.title}</h4>
                  <p> {result.description}</p>
                  <p>
                    {' '}
                    Created at:{' '}
                    <Moment format="YYYY-MM-DD HH:mm A">
                      {result.createdAt}
                    </Moment>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
