import React from 'react';
// Components
import PostsList from 'components/PostsList';
import Search from 'components/Search';
const Posts = () => {
  return (
    <div>
      <Search />
      <PostsList />
    </div>
  );
};

export default Posts;
