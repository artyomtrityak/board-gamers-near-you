import React from 'react';
import MenuComponent from './menu.component';
import MapComponent from './map/map.component';
import { RouteHandler } from 'react-router';

export default React.createClass({
  render: function() {
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