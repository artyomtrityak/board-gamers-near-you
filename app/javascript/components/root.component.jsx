import React from 'react';
import { RouteHandler } from 'react-router';

import AppActions from 'actions/app.actions';
import AppStore from 'stores/app.store';
import Loader from 'components/shared/loader';

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
    window.fbAsyncInit = this.initializeFb;

    this.loadFBSdk();

    AppStore.on('change', this.handleChange);
  },

  handleChange(appState) {
    this.setState(appState);
  },

  initializeFb() {
    AppActions.initialize();
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
        1213
        <div ref='loader'>
          <Loader loading={true} />
        </div>

        <RouteHandler />
      </div>
    );
  }
});