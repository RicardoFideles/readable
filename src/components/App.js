import './App.css';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getAllCategories } from '../actions/categories';
import { getAllPostsWithComments } from '../actions/posts';

import Header from './header';
import Content from './content';
import Footer from './footer';
import Sibebar from './sidebar';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPostsAndComments();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main-content">
          <div className="container">
            <div id="content" className="container">
              <div className="row">
                <div className="col-sm-12 col-md-9">
                  <Content />
                </div>
                <div className="col-sm-12 col-md-3">
                  <Sibebar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(undefined, {
    fetchCategories: getAllCategories,
    fetchPostsAndComments: getAllPostsWithComments,
  })(App)
);
