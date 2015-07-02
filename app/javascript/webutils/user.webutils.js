import Promise from 'bluebird';
import Firebase from 'firebase';
import Config from 'config';

var DB = new Firebase("https://luminous-fire-7938.firebaseio.com/");

var UserWebUtils = {
  initialize() {
    FB.init({ // this line replaces FB.init({
      appId: Config.get('facebookAppId'), // Facebook App ID
      status: true,  // check Facebook Login status
      cookie: true,  // enable cookies to allow Parse to access the session
      xfbml: true,  // initialize Facebook social plugins on the page
      version: 'v2.3' // point to the latest Facebook Graph API version
    });
    return DB.getAuth();
  },

  loginOrSignup(user) {
    var deferred = Promise.pending();

    DB.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        deferred.reject(error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        deferred.resolve(authData);
      }
    }, {
      scope: 'public_profile,email'
    });

    return deferred.promise;
  }
};

export default UserWebUtils;