import React, { Component } from 'react';
import { getAllPostsWithComments } from '../../actions/posts';
import PostItem from './post-item';
import PropTypes from 'prop-types';
import { getOrderedPosts } from '../../selectors';

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array,
  };

  render() {
    const { category, posts } = this.props;
    let filteredPost = [];
    if (category) {
      filteredPost = this.props.posts.filter(p => p.category === category);
    } else {
      filteredPost = this.props.posts;
    }
    return (
      <div className="row">
        {filteredPost.map(post => <PostItem key={post.id} {...post} />)}
      </div>
    );
  }
}

export default PostList;
