import React, { useContext } from 'react';
import { Context } from 'context/PostsContext';
import CommentsList from 'components/CommentsList';
const Post = ({ post }) => {
  const {
    data: { users },
    isLoading,
  } = useContext(Context);
  // const user = users.filter((user) => user.id === post.Id);
  return (
    <div>
      <h5>User Name</h5>
      <p>{post.body}</p>
      {/* <CommentsList /> */}
    </div>
  );
};

export default Post;
