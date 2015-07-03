import AppDispatcher from 'dispatchers/app.dispatcher';
import { ActionTypes } from 'constants/app.constants';
import UserWebUtils from 'webutils/user.webutils';

var AppActions = {
  initialize() {
    var auth = UserWebUtils.initialize();

    console.log(auth);

    AppDispatcher.handleViewAction({
      type: ActionTypes.APP_LOADED,
      user: auth
    });
  },

  login() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_PROCESSING
    });

    UserWebUtils.loginOrSignup()
    .then((user) => {
      AppDispatcher.handleServerAction({
        type: ActionTypes.LOGIN_DONE,
        user: user
      });
    })
    .catch((error) => {
      AppDispatcher.handleServerAction({
        type: ActionTypes.LOGIN_ERROR,
        error: error
      });
    });
  }
};

export default AppActions;