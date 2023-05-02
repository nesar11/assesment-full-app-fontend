import React from 'react';
import './Post.css';
function PostList(props) {
  const { posts } = props;

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <div className="card">
            <div className="container">
              <div key={post.id}>
                <h4> {post.title}</h4>
                <p> {post.description}</p>
                <p> {post.createdAt}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
