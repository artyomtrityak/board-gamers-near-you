import React from 'react';
import { RouteHandler } from 'react-router';

import UserStore from 'stores/user.store';

import MenuComponent from './menu.component';
import MapComponent from './map/map.component';

export default React.createClass({
  displayName: 'AppComponent',

  statics: {
    willTransitionTo(transition, params, query, callback) {
      //TODO: wait till FB will be loaded and Initialize done
      if (UserStore.getState().get('user') === undefined) {
        transition.redirect('landing');
      }
      callback();
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