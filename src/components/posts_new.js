import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createPost } from '../actions';
import PostsNewForm from '../forms/posts_new_form';

class PostsNew extends Component {
  onSubmit(values){
    let { history } = this.props;
    this.props.createPost(values)
      .then(() => {
        history.push('/');
      })
  }

  render() {
    return (
      <div className="posts_new_form">
        <h2>Add Post</h2>
        <PostsNewForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default connect(null, { createPost })(withRouter(PostsNew));
