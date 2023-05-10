import React, { useState, useEffect } from 'react';
import PostList from './PostList';
const Post = () => {
  const [posts, setPosts] = useState([]);
  const APIURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log(process.env);
    fetch(`${APIURL}api/posts`)
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
