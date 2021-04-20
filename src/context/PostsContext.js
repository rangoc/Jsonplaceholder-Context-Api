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
    selectedPost: null,
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
    //eslint-disable-next-line
  }, []);
  const fetchPosts = async () => {
    setState((prev) => {
      if (prev.posts) {
        return { ...prev, isUpdating: true }; // updating
      }
      return { ...prev, isLoading: true }; // fetching for a first time
    });
    try {
      // fetching posts
      const postsResponse = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const posts = await postsResponse.json();
      // fetching users
      const usersResponse = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await usersResponse.json();

      // making new data structure which ties user's name with a post
      const makeNewPosts = () => {
        const postsAndUsers = [];
        const newPosts = posts.map((post) => {
          const author = users.filter((user) => user.id === post.userId);
          postsAndUsers.push({ author: author[0].name, ...post });
          return postsAndUsers;
        });
        return newPosts[newPosts.length - 1];
      };
      setState({
        ...state,
        isLoading: false,
        isUpdating: false,
        error: null,
        posts: makeNewPosts(),
      });
    } catch (e) {
      setState({
        ...state,
        isLoading: false,
        isUpdating: false,
        error: e,
        posts: null,
      });
    }
  };
  return state;
};

export const useFetchPost = (postId) => {
  const { state, setState } = useContext(PostsContext);
  useEffect(() => {
    fetchPost(postId);
    //eslint-disable-next-line
  }, []);
  const fetchPost = async (postId) => {
    setState((prev) => {
      if (prev.selectedPost) {
        return { ...prev, isUpdating: true }; // updating
      }
      return { ...prev, isLoading: true }; // fetching for a first time
    });
    try {
      // fetching single post
      const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const post = await postResponse.json();

      // getting the userId from the post and fetching that user
      const userId = post.userId;

      const userResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const user = await userResponse.json();

      const makeNewPost = () => {
        const postAndUser = { author: user.name, ...post };
        return postAndUser;
      };
      setState({
        ...state,
        isLoading: false,
        isUpdating: false,
        error: null,
        selectedPost: makeNewPost(),
      });
    } catch (e) {
      setState({
        ...state,
        isLoading: false,
        isUpdating: false,
        error: e,
        selectedPost: null,
      });
    }
  };
  return state;
};
export default PostsContextProvider;
