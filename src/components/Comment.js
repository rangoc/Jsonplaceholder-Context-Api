import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Comment = ({ comment }) => {
  return (
    <StyledComment>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </StyledComment>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};
const StyledComment = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 2rem;
`;
export default Comment;
