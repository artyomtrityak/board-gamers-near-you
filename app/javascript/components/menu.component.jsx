import React from 'react';
import { Link, State } from 'react-router';

//import UserStore from 'stores/user.store';

export default React.createClass({
  displayName: 'MenuComponent',
  mixins: [State],

  render() {
    return (
      <nav className='navbar-default navbar-static-side' role='navigation'>
        <ul className='nav'>
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
      </nav>
    );
  }
});