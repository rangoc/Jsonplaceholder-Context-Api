import React from 'react';
import styled from 'styled-components';
import { useFetchComments } from 'context/CommentsContext';
import Comment from 'components/Comment';
import Loader from 'components/Loader';
const CommentsList = ({ postId }) => {
  const { isLoading, comments } = useFetchComments(postId);
  return (
    <StyledCommentsList>
      {isLoading ? (
        <Loader />
      ) : (
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      )}
    </StyledCommentsList>
  );
};
const StyledCommentsList = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
`;
export default CommentsList;
