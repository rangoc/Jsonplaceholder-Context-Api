import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Styles
import styled from 'styled-components';
// Pages and Components
import Posts from 'pages/Posts';
import PostDetails from 'pages/PostDetails';
import Nav from 'components/Nav';
import GlobalStyle from 'components/GlobalStyle';
const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Nav} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/post/:id" component={PostDetails} />
      </Switch>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;
export default App;
