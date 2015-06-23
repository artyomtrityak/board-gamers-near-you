'use strict';

import { Dispatcher } from 'flux';
import Constants from 'constants/app.constants';

var PayloadSources = Constants.PayloadSources;

class AppDispatcher extends Dispatcher {
  handleViewAction(action) {
    var payload = {
        source: PayloadSources.VIEW_ACTION,
        action: action
    };
    this.dispatch(payload);
  }

  handleServerAction(action) {
    var payload = {
        source: PayloadSources.SERVER_ACTION,
        action: action
    };
    this.dispatch(payload);
  }
}



export default new AppDispatcher();