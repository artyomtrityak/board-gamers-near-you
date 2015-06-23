import React from 'react';
import { RouteHandler } from 'react-router';

import AppActions from 'actions/app.actions';
import MenuComponent from './menu.component';
import MapComponent from './map/map.component';

export default React.createClass({
  displayName: 'AppComponent',

  statics: {
    willTransitionTo(transition, params, query, callback) {
      //Add loader
      AppActions.isLoggenIn()
      .catch(() => {
        transition.redirect('landing');
        callback();
      })
      .finally(() => {
        //Hide loader
      });
    }
  },

  render() {
    return (
      <div>
        <MenuComponent />

        <div className='gray-bg' id='page-wrapper'>
          <MapComponent />
        </div>

        <div id='modal-container'>
          <RouteHandler />
        </div>

      </div>
    );
  }
});