import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/app';
import PostsNew from './components/posts_new';
import Post from './components/post';

export default (props) => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/posts/new" component={PostsNew} />
      <Route exact path="/posts/:id" component={Post} />
    </Switch>
  );
}
