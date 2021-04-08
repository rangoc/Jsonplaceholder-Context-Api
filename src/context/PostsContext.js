import React, { useState, createContext } from 'react';

export const Context = createContext();

export const PostsStore = ({ children }) => {
  // const [posts, setPosts] = useState([]);
  // const [users, setUsers] = useState([]);
  // const fetchPosts = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const data = await response.json();
  //   setPosts(data);
  // };
  // const fetchUsers = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await response.json();
  //   setUsers(data);
  // };
  const [data, setData] = useState({});
  const fetchData = async () => {
    const postsResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const posts = await postsResponse.json();
    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await usersResponse.json();
    setData({ posts, users });
  };
  return (
    <Context.Provider value={{ data, fetchData }}>{children}</Context.Provider>
  );
};
