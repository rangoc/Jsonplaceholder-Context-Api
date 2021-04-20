import React from 'react';
import PropTypes from 'prop-types';
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

CommentsList.propTypes = {
  postId: PropTypes.number.isRequired,
};

const StyledCommentsList = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
`;
export default CommentsList;
