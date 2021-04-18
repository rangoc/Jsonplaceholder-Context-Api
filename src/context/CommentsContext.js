import React, { createContext, useContext, useState, useEffect } from 'react';

export const CommentsContext = createContext();

const CommentsContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoading: true,
    isUpdating: false,
    error: null,
    comments: null,
  });

  return (
    <CommentsContext.Provider value={{ state, setState }}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useFetchComments = (postId) => {
  const { state, setState } = useContext(CommentsContext);
  useEffect(() => {
    fetchComments(postId);
  }, []);
  const fetchComments = async (postId) => {
    setState((prev) => {
      if (prev.data) {
        return { ...prev, isUpdating: true }; // updating
      }
      return { ...prev, isLoading: true }; // fetching for a first time
    });
    try {
      const commentsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const comments = await commentsResponse.json();
      setState({
        isLoading: false,
        isUpdating: false,
        error: null,
        comments,
      });
    } catch (e) {
      setState({
        isLoading: false,
        isUpdating: false,
        error: e,
        comments: null,
      });
    }
  };
  return state;
};

export default CommentsContextProvider;
