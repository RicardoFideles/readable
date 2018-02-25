import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostList from '../post/post-list';
import PostEdit from '../post/post-edit';
import PostDetail from '../post/post-detail'
// import { connect } from 'react-redux'
import PostNew from '../post/post-new'
import PageNotFound from '../page/PageNotFound'


class Content extends Component {

  render() {
    return (
      <div className='content'>
        <Switch>
          <Route exact path='/' render={({history}) => (<PostList {...history}/>)} />
          <Route exact path='/newPost' render={({history}) => (<PostNew {...history}/>)} />
          <Route exact path='/:category' render={({ match }) => (<PostList category={match.params.category} />)}/>
          <Route exact path='/:category/:postId' render={({ match, ...history }) => (<PostDetail id={match.params.postId}/>)} />
          <Route exact path='/:category/:postId/edit' render={({ match, ...history }) => (<PostEdit id={match.params.postId} {...history}/>)} />
          <Route exact path='/:category/:postId/comment' render={({ match, ...history }) => (<PostDetail id={match.params.postId}/>)} />
          <Route exact path='/:category/:postId/commentId/edit' render={({ match, ...history }) => (<PostDetail id={match.params.postId}/>)} />
          <Route path='/' component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

export default Content

