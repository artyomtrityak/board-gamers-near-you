import EventEmitter from 'eventemitter2';
import Immutable from 'immutable';

import AppDispatcher from 'dispatchers/app.dispatcher';

// Private data and functions
var appState = Immutable.Map({loading: true});

function _showLoading () {
  appState = appState.set('loading', true);
}

function _hideLoading () {
  appState = appState.set('loading', false);
}

// Store eventemitter
class AppStore extends EventEmitter {
  getState() {
    return appState;
  }

  emitChange() {
    this.emit('change');
  }
}
var store = new AppStore();

// Dispatcher
store.dispatchToken = AppDispatcher.register((payload) => {
  console.log(payload)
  var action = payload.action;

  switch (payload.action) {
    case 'LOADING:SHOW':
      _showLoading();
      store.emitChange();
      break;

    case 'FACEBOOK:LOADED':
    case 'LOADING:HIDE':
      console.log('loaded!')
      _hideLoading();
      store.emitChange();
      break;
  }
});

export default store;