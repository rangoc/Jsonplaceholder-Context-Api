import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPost } from 'context/PostsContext';

import Post from 'components/Post';
import Loader from 'components/Loader';

const PostDetails = () => {
  const { id } = useParams();
  const { isLoading, selectedPost } = useFetchPost(id);
  console.log(selectedPost);
  console.log(isLoading);
  return <div>{isLoading ? <Loader /> : <Post post={selectedPost} />}</div>;
};

export default PostDetails;
