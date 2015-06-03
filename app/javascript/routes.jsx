import flux from 'flux';
import url from '../images/mansions.jpg';
import React from 'react';

var View = React.createClass({
  render: function() {
    return <div>123 <img src={url} /> </div>
  }
});

React.render(
  <View />,
  document.getElementById('react-root')
)