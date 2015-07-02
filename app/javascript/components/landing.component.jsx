import React from 'react';
import { RouteHandler } from 'react-router';

import AppActions from 'actions/app.actions';

//import headerImg from './images/header_one.jpg';
//import laptopImg from './images/laptop.png';


export default React.createClass({
  displayName: 'LandingComponent',

  onLogin() {
    AppActions.login();
  },


  render() {
    return (
      <div>
        <div>
          {/* hide button if logged in and show Go To App btn */}
          Welcome page, <button onClick={this.onLogin}>Login</button>
        </div>

        <div id='modal-container'>
          <RouteHandler />
        </div>

      </div>
    );
  }
});