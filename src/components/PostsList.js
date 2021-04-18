import React from 'react';
import Post from 'components/Post';
import { useFetchPosts } from 'context/PostsContext';
import CommentsContextProvider from 'context/CommentsContext';
import styled from 'styled-components';
const PostsList = () => {
  const { isLoading, posts, users } = useFetchPosts();
  return (
    <List>
      {isLoading
        ? 'Loading'
        : posts.map((post) => (
            <CommentsContextProvider key={post.id}>
              <Post post={post} users={users} />
            </CommentsContextProvider>
          ))}
    </List>
  );
};

const List = styled.div`
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
`;
export default PostsList;
