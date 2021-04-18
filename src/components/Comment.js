import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
