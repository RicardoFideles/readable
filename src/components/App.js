import './App.css'
import React, { Component } from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Sibebar from './sidebar';

class App extends Component {

  render() {
    return (
      <div className='wrapper'>
        <Header/>
        <div className="container">
            <div id="content" className="main-content-inner">
              <div className="row">
                <Content/>
                <div className="col-sm-12 col-md-3">
                  <Sibebar />
                </div>

              </div>
            </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default (App)
