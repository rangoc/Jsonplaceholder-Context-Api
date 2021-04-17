import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <Link to="/posts">
      <h1>Test App</h1>
      <h3>See All Posts</h3>
    </Link>
  );
};

export default Nav;
