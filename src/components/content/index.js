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
          <Route exact path='/' render={() => (<PostList/>)} />
          <Route exact path='/:category' render={({ match }) => (<PostList category={match.params.category} />)}/>
          <Route exact path='/newPost' render={({ match }) => (<PostForm category={match.params.category} />)}/>
          <Route exact path='/:category/:postId' render={({ match }) => (<PostDetail id={match.params.postId}/>)} />
          <Route exact path='/:category/:postId/edit' render={({ match }) => (<PostForm id={match.params.postId}/>)} />
          <Route exact path='/:category/:postId/comment' render={({ match }) => (<PostDetail id={match.params.postId}/>)} />
          <Route exact path='/:category/:postId/commentId/edit' render={({ match }) => (<PostDetail id={match.params.postId}/>)} />
        </Switch>
      </div>
    )
  }
}

export default Content

