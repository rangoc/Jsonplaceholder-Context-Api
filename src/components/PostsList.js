import React, { useContext } from 'react';
import Post from './Post';
import { Context } from 'context/PostsContext';
const PostsList = () => {
  const {
    data: { posts },
    isLoading,
  } = useContext(Context);
  return (
    <div>
      <ul className="list-group">
        {!isLoading &&
          posts.map((post, index) => (
            <li key={index} className="list-group-item">
              <Post key={index} post={post} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostsList;
