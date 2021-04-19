import React, { useContext } from 'react';
import Post from 'components/Post';
import Loader from 'components/Loader';
import { useFetchPosts, PostsContext } from 'context/PostsContext';
import CommentsContextProvider from 'context/CommentsContext';
import styled from 'styled-components';
const PostsList = () => {
  const { isLoading, posts } = useFetchPosts();
  const {
    state: { isSearchActive, filteredPosts },
  } = useContext(PostsContext);
  const data = isSearchActive ? filteredPosts : posts;
  return (
    <StyledPostsList>
      {isLoading ? (
        <Loader />
      ) : (
        data.map((post) => (
          <CommentsContextProvider key={post.id}>
            <Post post={post} />
          </CommentsContextProvider>
        ))
      )}
    </StyledPostsList>
  );
};

const StyledPostsList = styled.div`
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  min-height: 80vh;
`;
export default PostsList;
