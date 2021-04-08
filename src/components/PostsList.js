import React, { useContext } from 'react';
import Post from './Post';
import { Context } from 'context/PostsContext';
const PostsList = () => {
  const {
    data: { posts, users },
  } = useContext(Context);
  return (
    <div>
      <ul className="list-group">
        {posts &&
          users &&
          posts.map((post, index) => (
            <li key={index} className="list-group-item">
              <Post key={index} post={post} users={users} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostsList;
