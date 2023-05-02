import React, { useState, useEffect } from 'react';
import PostList from './PostList';
const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default Post;
