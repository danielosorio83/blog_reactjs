import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return this.props.posts.map( (post) => {
      return (
        <li key={post.id} className="list-group-item">
          <span className="pull-right">{post.categories}</span>
          <strong><Link to={`/posts/${post.id}`}>{post.title}</Link></strong>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
