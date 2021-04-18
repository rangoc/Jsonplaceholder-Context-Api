import React from 'react';
import styled from 'styled-components';
import { useFetchComments } from 'context/CommentsContext';
import Comment from 'components/Comment';
const CommentsList = ({ postId }) => {
  const { isLoading, comments } = useFetchComments(postId);
  return (
    <Comments>
      {isLoading
        ? 'Loading comments...'
        : comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
    </Comments>
  );
};
const Comments = styled.div`
  padding: 2rem 3rem;
`;
export default CommentsList;
