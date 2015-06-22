import React from 'react';
import Spinner from 'spin.js';

export default React.createClass({
  propTypes: {
    loading: React.PropTypes.bool.required
  },

  componentDidMount: function() {
    this.spinner = new Spinner();
    this.spinner.spin(this.refs.container.getDOMNode());
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.loading === false && this.props.loading === true) {
      this.spinner.stop();
    } else if (newProps.loading === true && this.props.loading === false) {
      this.spinner.spin(this.refs.container.getDOMNode());
    }
  },

  componentWillUnmount: function() {
    this.spinner.stop();
  },

  render: function() {
    return (
      <span ref="container" />
    );
  }
});