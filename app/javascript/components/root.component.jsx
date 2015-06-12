import React from 'react';
import { RouteHandler } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div id='wrapper'>
        <RouteHandler />
      </div>
    );
  }
});