import Promise from 'bluebird';

import AppDispatcher from 'dispatchers/app.dispatcher';
import { Parse } from 'parse';

var AppActions = {
  initialize() {
    Parse.initialize(
      "vDKR3oTYWYiuk0FQxqPEVrJERnoFfVOc04QcNIp3",
      "I3NQHXelbDBYIvNAd0pLC4iQQP2BB2LZGupPHzfm"
    );

    Parse.FacebookUtils.init({ // this line replaces FB.init({
      appId: '1450486298601683', // Facebook App ID
      status: true,  // check Facebook Login status
      cookie: true,  // enable cookies to allow Parse to access the session
      xfbml: true,  // initialize Facebook social plugins on the page
      version: 'v2.3' // point to the latest Facebook Graph API version
    });
  },

  isLoggenIn() {
    var deferred = Promise.pending();
    setTimeout(function(){
        deferred.reject('not logged in');
    }, 2000);
    return deferred.promise;
  },


};

export default AppActions;