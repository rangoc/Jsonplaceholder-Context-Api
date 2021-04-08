import React, { useState, createContext } from 'react';

export const Context = createContext();

export const PostsStore = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const postsResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const posts = await postsResponse.json();

    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await usersResponse.json();

    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    );
    const comments = await commentsResponse.json();

    setData({ posts, users, comments });
    setIsLoading(false);
  };
  return (
    <Context.Provider
      value={{
        data,
        isLoading,
        fetchData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
