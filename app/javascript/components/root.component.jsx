import React from 'react';
import { RouteHandler } from 'react-router';

import AppActions from 'actions/app.actions';
import AppStore from 'stores/app.store';
import Loader from 'components/shared/loader';

export default React.createClass({
  displayName: 'RootComponent',

  getInitialState() {
    return AppStore.getState().toObject();
  },

  componentDidMount() {
    window.fbAsyncInit = this.initializeFb;

    this.loadFBSdk();

    AppStore.on('change', this.handleChange);
  },

  handleChange() {
    //TODO: .toObject tmp till 0.13.4 will be out
    this.setState(AppStore.getState().toObject());
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
    console.log(this.state);
    return (
      <div id='wrapper'>
        1213
        <div ref='loader'>
          <Loader loading={this.state.loading} />
        </div>

        <RouteHandler />
      </div>
    );
  }
});