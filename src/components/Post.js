import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommentsList from 'components/CommentsList';

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  const showCommentsHandler = () => {
    setShowComments(!showComments);
  };
  return (
    <StyledPost>
      <Link to={`/post/${post?.id}`}>
        <h2>{post?.author}</h2>
        <h3>{post?.title}</h3>
        <p>{post?.body}</p>
      </Link>
      <button onClick={showCommentsHandler}>
        {showComments ? 'Close comments' : 'Show comments'}
      </button>
      {showComments ? <CommentsList postId={post?.id} /> : ''}
      <div className="line" />
    </StyledPost>
  );
};

Post.propTypes = {
  post: PropTypes.object,
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
    cursor: pointer;
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
