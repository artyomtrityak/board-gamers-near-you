import React from 'react';
import { RouteHandler } from 'react-router';

import AppActions from 'actions/app.actions';

export default React.createClass({
  componentDidMount() {
    console.log('DID MOUNT');
    //TODO: show loader

    window.fbAsyncInit = this.initializeFb;

    this.loadFBSdk();
  },

  initializeFb() {
    AppActions.initialize();
    //TODO: hide loader
  },

  loadFBSdk() {
    var fjs = document.getElementsByTagName('script')[0];
    var js = document.createElement('script');
    js.id = 'facebook-jssdk';
    js.src = '//connect.facebook.net/en_US/all.js';
    fjs.parentNode.insertBefore(js, fjs);
  },

  render() {
    return (
      <div id='wrapper'>
        <RouteHandler />
      </div>
    );
  }
});