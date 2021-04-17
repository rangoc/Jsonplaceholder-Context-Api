import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import { BrowserRouter as Router } from 'react-router-dom';
// Context
import PostsContextProvider from 'context/PostsContext';
ReactDOM.render(
  <PostsContextProvider>
    <Router>
      <App />
    </Router>
  </PostsContextProvider>,
  document.querySelector('#root')
);
