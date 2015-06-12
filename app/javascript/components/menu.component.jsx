import React from 'react';
import { Link, State } from 'react-router';

export default React.createClass({
  mixins: [State],

  render: function() {
    return (
      <nav className='navbar-default navbar-static-side' role='navigation'>
        <div className='sidebar-collapse'>
            <ul className='nav' id='side-menu'>
                <li>
                  <div className='logo-element'>
                      BG
                  </div>
                </li>
                <li className={this.isActive('notifications') ? 'active' : ''}>
                  <Link to='notifications'>
                      <i className='fa fa-th-large'></i>
                  </Link>
                </li>
                <li className={this.isActive('user') ? 'active' : ''}>
                  <Link to='user'>
                      <i className='fa fa-diamond'></i>
                  </Link>
                </li>
            </ul>

        </div>
      </nav>
    );
  }
});