import React, { useState } from 'react';
import './Post.css';
import Moment from 'react-moment';

function PostList(props) {
  const APIURl = process.env.REACT_APP_API_URL;
  const { posts } = props;
  const [query, setQuery] = useState('');

  function deletePost(id) {
    fetch(`${APIURl}posts/${id}`, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((respone) => {
        console.warn(respone);
        window.location.href = '/home';
      });
    });
  }

  return (
    <div>
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
      <ul>
        {posts
          .filter((post) => post.title.toLowerCase().includes(query))
          .map((post) => (
            <div className="card">
              <div className="container">
                <div key={post.id}>
                  <img
                    className="post-image"
                    width={315}
                    src={post.image}
                    alt={post.name}
                  />
                  <h4> {post.title}</h4>
                  <p> {post.description}</p>
                  <p>
                    {' '}
                    Created at:
                    <Moment format="YYYY-MM-DD HH:mm A">
                      {post.createdAt}
                    </Moment>
                  </p>
                  <button
                    className="delete-Button"
                    onClick={() => deletePost(post._id)}
                  >
                    {' '}
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default PostList;
