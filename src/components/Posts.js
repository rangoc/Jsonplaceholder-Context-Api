import React from 'react';
import SearchPosts from 'components/SearchPosts';
import PostsList from 'components/PostsList';
const Posts = () => {
  return (
    <div>
      <SearchPosts />
      <PostsList />
    </div>
  );
};

export default Posts;
