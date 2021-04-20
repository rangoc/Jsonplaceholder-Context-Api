import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPost } from 'context/PostsContext';

import Post from 'components/Post';
import Loader from 'components/Loader';
import styled from 'styled-components';
const PostDetails = () => {
  const { id } = useParams();
  const { isLoading, selectedPost } = useFetchPost(id);
  console.log(selectedPost);
  console.log(isLoading);
  return (
    <StyledPostDetails>
      {isLoading ? <Loader /> : <Post post={selectedPost} />}
    </StyledPostDetails>
  );
};

const StyledPostDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;
export default PostDetails;
