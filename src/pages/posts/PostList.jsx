import React from 'react';
import './Post.css';
import Moment from 'react-moment';
function PostList(props) {
  const { posts } = props;

  return (
    <div>
      <ul>
        {posts.map((post) => (
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
                  <Moment format="YYYY-MM-DD HH:mm A">{post.createdAt}</Moment>
                </p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
