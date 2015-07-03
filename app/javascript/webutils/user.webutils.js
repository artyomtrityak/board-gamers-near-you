import Promise from 'bluebird';
import Firebase from 'firebase';
import Config from 'config';

var DB = new Firebase('https://luminous-fire-7938.firebaseio.com/');

var UserWebUtils = {
  initialize() {
    FB.init({ //eslint-disable-line no-undef
      appId: Config.get('facebookAppId'),
      status: true,
      cookie: true,
      xfbml: true,
      version: 'v2.3'
    });
    return DB.getAuth();
  },

  loginOrSignup() {
    var deferred = Promise.pending();

    DB.authWithOAuthPopup('facebook', function(error, authData) {
      if (error) {
        console.log('Login Failed!', error);
        deferred.reject(error);
      } else {
        console.log('Authenticated successfully with payload:', authData);
        deferred.resolve(authData);
      }
    }, {
      scope: 'public_profile,email'
    });

    return deferred.promise;
  }
};

export default UserWebUtils;