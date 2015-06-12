import AppDispatcher from '../dispatchers/app.dispatcher';
import Promise from 'bluebird';

var AppActions = {
  isLoggenIn() {
    var deferred = Promise.pending();
    setTimeout(function(){
        deferred.reject('not logged in');
    }, 2000);
    return deferred.promise;
  }
};

export default AppActions;