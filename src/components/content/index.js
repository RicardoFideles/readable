import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostList from '../post/post-list';
import PostForm from '../post/post-form';

import { connect } from 'react-redux'

class Content extends Component {
  filterPostByCategory(posts, category) {
    return posts.filter(post => post.category === category);
  }

  filterPostById(posts, id) {
    return posts.filter(post => post.id === id)[0];
  }

  render() {
    const { posts } = this.props;
    return (
      <div className='content'>
        <Switch>
          <Route exact
            path='/'
            render={() => (
              <PostList posts={posts} />
            )}
          />
          <Route exact
            path='/posts/add'
            component={PostForm}
          />
          {/* <Route
            path='/posts/:id/edit'
            render={({ match }) => (
              <PostForm initialValues={this.filterPostById(posts, match.params.id)} />
            )}
          />
          <Route exact
            path='/posts/:id'
            render={({ match }) => (
              <PostDetail {...this.filterPostById(posts, match.params.id)} />
            )}
          />
          <Route exact
            path='/categories/:name'
            render={({ match }) => (
              <PostList posts={this.filterPostByCategory(posts, match.params.name)} />
            )}
          /> */}
        </Switch>
      </div>
    )
  }
}

export default Content

