import React from 'react';
import { RouteHandler } from 'react-router';

//import AppActions from 'actions/app.actions';

//import headerImg from './images/header_one.jpg';
//import laptopImg from './images/laptop.png';


export default React.createClass({
  render() {
    return (
      <div>
        <div>
          Welcome page
        </div>

        <div id='modal-container'>
          <RouteHandler />
        </div>

      </div>
    );
  }
});