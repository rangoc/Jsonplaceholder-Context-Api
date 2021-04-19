import React, { createContext, useContext, useState, useEffect } from 'react';

export const PostsContext = createContext();

const PostsContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoading: true,
    posts: null,
    error: null,
    isUpdating: false,
    isSearchActive: false,
    searchInput: '',
    filteredPosts: null,
  });

  return (
    <PostsContext.Provider value={{ state, setState }}>
      {children}
    </PostsContext.Provider>
  );
};

export const useFetchPosts = () => {
  const { state, setState } = useContext(PostsContext);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    setState((prev) => {
      if (prev.data) {
        return { ...prev, isUpdating: true }; // updating
      }
      return { ...prev, isLoading: true }; // fetching for a first time
    });
    try {
      const postsResponse = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const posts = await postsResponse.json();
      const usersResponse = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await usersResponse.json();

      const makeNewArray = () => {
        const postsAndUsers = [];
        const newPosts = posts.map((post) => {
          const author = users.filter((user) => user.id === post.userId);
          postsAndUsers.push({ author: author[0].name, ...post });
          return postsAndUsers;
        });
        return newPosts[newPosts.length - 1];
      };
      setState({
        isLoading: false,
        isUpdating: false,
        error: null,
        posts: makeNewArray(),
        isSearchActive: false,
        searchInput: '',
        filteredPosts: null,
      });
    } catch (e) {
      setState({
        isLoading: false,
        isUpdating: false,
        error: e,
        posts: null,
        isSearchActive: false,
        searchInput: '',
        filteredPosts: null,
      });
    }
  };
  return state;
};
export default PostsContextProvider;
