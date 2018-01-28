import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header id="masthead" className="site-header" role="banner">
    <div className="header-top">
      <div className="container">
        <div className="row">
        </div>
      </div>
    </div>
    <div id="header-main" className="header-bottom sticky">
      <div className="header-bottom-inner">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div id="logo">
                <div className="site-header-inner col-sm-12">
                  <div className="site-branding">
                    <h1 className="site-title">
                      <Link to='/'>
                        Ricardo Fideles
                      </Link>
                    </h1>
                    <h4>
                        Udacity - Readable Project
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;