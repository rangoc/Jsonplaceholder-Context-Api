import React from 'react';
import { useFetchComments } from 'context/CommentsContext';
import Comment from 'components/Comment';
const CommentsList = ({ postId }) => {
  const { isLoading, comments } = useFetchComments(postId);
  return (
    <div>
      {isLoading
        ? 'Loading comments...'
        : comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
    </div>
  );
};

export default CommentsList;
