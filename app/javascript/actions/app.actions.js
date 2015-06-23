import Promise from 'bluebird';
import { Parse } from 'parse';

import Config from 'config';
import AppDispatcher from 'dispatchers/app.dispatcher';

import { ActionTypes } from 'constants/app.constants';

var AppActions = {
  initialize() {
    Parse.initialize(
      Config.get('parseAppId'),
      Config.get('parseKey')
    );

    Parse.FacebookUtils.init({ // this line replaces FB.init({
      appId: Config.get('facebookAppId'), // Facebook App ID
      status: true,  // check Facebook Login status
      cookie: true,  // enable cookies to allow Parse to access the session
      xfbml: true,  // initialize Facebook social plugins on the page
      version: 'v2.3' // point to the latest Facebook Graph API version
    });

    AppDispatcher.handleViewAction({
      type: ActionTypes.FACEBOOK_LOADED
    });
  },

  isLoggenIn() {
    var deferred = Promise.pending();
    setTimeout(function(){
        deferred.reject('not logged in');
    }, 2000);
    return deferred.promise;
  }
};

export default AppActions;