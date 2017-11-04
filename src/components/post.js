import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { findPost, destroyPost } from '../actions';

class Post extends Component {
  componentWillMount(){
    this.props.findPost(this.props.match.params.id);
  }

  destroyPost(){
    this.props.destroyPost(this.props.match.params.id)
      .then( () => {
        this.props.history.push('/');
      })

  }

  render() {
    const { post } = this.props;
    if (!post){
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="btn-group pull-right">
          <Link to="/" className="btn btn-primary">Back</Link>
          <button type="button" className="btn btn-danger" onClick={this.destroyPost.bind(this)}>Delete</button>
        </div>
        <h3 className="lead">{post.title}</h3>
        <h6><em>{post.categories}</em></h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    post: state.posts.post
  }
}

export default connect(mapStateToProps, { findPost, destroyPost })(withRouter(Post));
