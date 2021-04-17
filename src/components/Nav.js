import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <Link to="/posts">
      <h3>See All Posts</h3>
    </Link>
  );
};

export default Nav;
