import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8000/posts/search/${searchQuery}`
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="post-secion">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {data.map((result) => (
        <div className="card">
          <div className="container">
            <div key={result.id} result={result}>
              <h4> {result.title}</h4>
              <p> {result.description}</p>
              <p> Created at: {result.createdAt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Search;
