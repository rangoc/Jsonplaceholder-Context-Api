import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'components/Header';
import Posts from 'components/Posts';
import Post from 'components/Post';
const App = () => {
  return (
    <div className="container-md">
      <Router>
        <Route exact path="/" component={Header} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />
      </Router>
    </div>
  );
};

export default App;
