import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='header heading'>
    <div id="logo">
      <div className="site-header-inner col-sm-12">
        <div className="site-branding">
          <h1 className="site-title">
            <Link to="/">
              Ricardo Fideles
            </Link>
          </h1>
          <h4 className="site-description">Projeto Readble - Udacity</h4>
        </div>
      </div>
    </div>
  </div>
);

export default Header;