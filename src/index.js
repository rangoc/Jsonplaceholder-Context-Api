import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import { BrowserRouter as Router } from 'react-router-dom';
// Context
import PostsContextProvider from 'context/PostsContext';
import CommentsContextProvider from 'context/CommentsContext';
ReactDOM.render(
  <PostsContextProvider>
    <CommentsContextProvider>
      <Router>
        <App />
      </Router>
    </CommentsContextProvider>
  </PostsContextProvider>,
  document.querySelector('#root')
);
