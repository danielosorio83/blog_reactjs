import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Posts from './posts';

export default class App extends Component {
  render() {
    return (
      <main>
        <div className="pull-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add Post
          </Link>
        </div>
        <h1 className="text-left">Blog</h1>
        <hr />
        <Posts />
      </main>
    );
  }
}
