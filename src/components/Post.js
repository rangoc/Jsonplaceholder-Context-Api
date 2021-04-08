import React from 'react';

const Post = ({ post, users }) => {
  const user = users.filter((user) => user.id === post.userId);
  return (
    <div>
      <h5>{user[0].name}</h5>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
