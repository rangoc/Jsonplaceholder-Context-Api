import React, { createContext, useContext, useState, useEffect } from 'react';

export const PostsContext = createContext();

const PostsContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoading: true,
    posts: null,
    users: null,
    error: null,
    isUpdating: false,
    isSearchActive: false,
    searchInput: '',
    filteredPosts: null,
    postsWithUsers: [],
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
      setState({
        isLoading: false,
        isUpdating: false,
        error: null,
        posts,
        users,
        isSearchActive: false,
        searchInput: '',
        filteredPosts: null,
        postsWithUsers: [],
      });
    } catch (e) {
      setState({
        isLoading: false,
        isUpdating: false,
        error: e,
        posts: null,
        users: null,
        isSearchActive: false,
        searchInput: '',
        filteredPosts: null,
        postsWithUsers: [],
      });
    }
  };
  return state;
};
export default PostsContextProvider;
