import React from 'react';
import loader from 'assets/loader.svg';
import styled from 'styled-components';
const Loader = () => {
  return <StyledLoader src={loader} alt="" />;
};

const StyledLoader = styled.img`
  margin: 0 0 2em;
  height: 300px;
  width: 100%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: center;
  color: lightgreen;
`;
export default Loader;
