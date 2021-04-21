import React, { useContext } from 'react';
import styled from 'styled-components';
import { PostsContext } from 'context/PostsContext';
const Search = () => {
  const { state, setState } = useContext(PostsContext);
  const searchHandler = (e) => {
    const filteredPosts = state.posts.filter(
      (p) =>
        p.author.toLowerCase().includes(e.target.value.toLowerCase()) === true
    );
    if (e.target.value) {
      setState({
        ...state,
        isSearchActive: true,
        searchInput: e.target.value,
        filteredPosts,
      });
    } else {
      setState({
        ...state,
        isSearchActive: false,
        searchInput: e.target.value,
        filteredPosts,
      });
    }
  };
  return (
    <>
      {state.isLoading ? (
        ''
      ) : (
        <StyledSearch>
          <input
            type="text"
            value={state.searchInput}
            placeholder="Search by author's name"
            onChange={searchHandler}
          />
        </StyledSearch>
      )}
    </>
  );
};
const StyledSearch = styled.div`
  input {
    width: 310px;
    border-radius: 2rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    outline: none;
    border: none;
    margin-left: 2rem;
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 600px) {
    margin-top: 1rem;
  }
`;
export default Search;
