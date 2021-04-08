import React, { useContext, useEffect } from 'react';
import SearchPosts from 'components/SearchPosts';
import PostsList from 'components/PostsList';
import { Context } from 'context/PostsContext';
const Posts = () => {
  const { fetchData } = useContext(Context);
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <SearchPosts />
      <PostsList />
    </div>
  );
};

export default Posts;
