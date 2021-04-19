import React from 'react';
// Components
import PostsList from 'components/PostsList';
import Search from 'components/Search';
// styles
import styled from 'styled-components';
const Posts = () => {
  return (
    <StyledPosts>
      <Search />
      <PostsList />
    </StyledPosts>
  );
};
const StyledPosts = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;
export default Posts;
