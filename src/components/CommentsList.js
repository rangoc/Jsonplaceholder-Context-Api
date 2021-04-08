import React, { useContext } from 'react';
import { Context } from 'context/PostsContext';
import Comment from 'components/Comment';
const CommentsList = () => {
  const {
    data: { comments },
  } = useContext(Context);

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
