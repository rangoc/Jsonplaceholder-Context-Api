import React, { useState } from 'react';
import styled from 'styled-components';
import CommentsList from 'components/CommentsList';
const Post = ({ post, users }) => {
  const { title, body, userId, id } = post;

  const author = users.filter((user) => user.id === userId);
  const name = author[0].name;

  const [showComments, setShowComments] = useState(false);

  const showCommentsHandler = () => {
    setShowComments(!showComments);
  };
  return (
    <StyledPost>
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={showCommentsHandler}>
        {showComments ? 'Close comments' : 'Show comments'}
      </button>
      {showComments ? <CommentsList postId={id} /> : ''}
      <div className="line" />
    </StyledPost>
  );
};

const StyledPost = styled.div`
  padding-bottom: 2rem;
  h2 {
    font-size: 1.7rem;
  }
  p {
    padding-bottom: 2rem;
  }
  button {
    padding: 0.5rem;
    color: black;
    background: white;
    border-radius: 5px;
    border: 1px solid black;
    margin-bottom: 2rem;
    transition: background 0.5s ease;
    &:hover {
      background: black;
      color: white;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export default Post;
