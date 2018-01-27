import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostList from '../post/post-list';
import PostForm from '../post/post-form';
import PostDetail from '../post/post-detail'
import { connect } from 'react-redux'

class Content extends Component {

  render() {
    return (
      <div className='content'>
        <Switch>
          <Route exact
            path='/'
            render={() => (
              <PostList  />
            )}
          />
          {/* <Route exact
            path='/posts/add'
            component={PostForm}
          /> */}
          {/* <Route
            path='/posts/:id/edit'
            render={ ({ match }) => (
              <PostForm initialValues={this.filterPostById(posts, match.params.id)} />
            )}
          /> */}
          <Route exact
            path='/posts/:id'
            render={({ match }) => (
              <PostDetail id={match.params.id}/>
            )}
          />
          <Route exact
            path='/categories/:name'
            render={({ match }) => (
              <PostList category={match.params.name} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default Content

