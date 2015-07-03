import EventEmitter from 'eventemitter2';
import Immutable from 'immutable';

import AppDispatcher from 'dispatchers/app.dispatcher';
import { ActionTypes } from 'constants/app.constants';

// Private data and functions
var UserState = Immutable.Map({user: undefined});

function _login(user) {
  if (!user) {
    return;
  }
  var imUser = Immutable.fromJS(user.facebook);
  UserState = UserState.set('user', imUser);
}

// Store eventemitter
class UserStore extends EventEmitter {
  getState() {
    return UserState;
  }

  emitChange() {
    this.emit('change');
  }
}
var store = new UserStore();

// Dispatcher
store.dispatchToken = AppDispatcher.register((payload) => {
  var action = payload.action;

  switch (action.type) {
    case ActionTypes.APP_LOADED:
    case ActionTypes.LOGIN_DONE:
      _login(action.user);
      store.emitChange();
      break;
  }
});

export default store;