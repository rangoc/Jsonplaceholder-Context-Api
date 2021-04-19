import React, { useContext } from 'react';
import styled from 'styled-components';
import { PostsContext } from 'context/PostsContext';
const Search = () => {
  const { state, setState } = useContext(PostsContext);
  console.log(state);
  const searchHandler = (e) => {
    console.log(e.target.value);
    const filteredPosts = state.postsWithUsers.filter(
      (p) =>
        p.author.toLowerCase().includes(e.target.value.toLowerCase()) === true
    );
    setState({ ...state, filteredPosts });
  };
  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="Search posts..."
        onChange={searchHandler}
      />
    </StyledSearch>
  );
};
const StyledSearch = styled.div`
  input {
    width: 320px;
    border-radius: 2rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    outline: none;
    border: none;
    margin-bottom: 2rem;
    padding: 1rem 2rem;
  }
`;
export default Search;
