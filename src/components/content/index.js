import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PostList from '../post/post-list';
import PostEdit from '../post/post-edit';
import PostDetail from '../post/post-detail';
import PostNew from '../post/post-new';
import PageNotFound from '../page/PageNotFound';
import { getOrderedPosts } from '../../selectors';

class Content extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <PostList posts={posts} />} />
          <Route exact path="/newPost" render={() => <PostNew />} />
          <Route
            exact
            path="/:category"
            render={({ match }) => (
              <PostList category={match.params.category} />
            )}
          />
          <Route
            exact
            path="/:category/:postId"
            render={({ match }) => <PostDetail id={match.params.postId} />}
          />
          <Route
            exact
            path="/:category/:postId/edit"
            render={({ match }) => <PostEdit id={match.params.postId} />}
          />
          <Route
            exact
            path="/:category/:postId/comment"
            render={({ match }) => <PostDetail id={match.params.postId} />}
          />
          <Route
            exact
            path="/:category/:postId/commentId/edit"
            render={({ match }) => <PostDetail id={match.params.postId} />}
          />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: getOrderedPosts(state),
});

export default withRouter(connect(mapStateToProps)(Content));
