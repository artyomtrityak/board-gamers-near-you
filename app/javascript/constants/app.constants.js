'use strict';

//var keyMirror = require('react/lib/keyMirror');
import keyMirror from 'react/lib/keyMirror';

export default {
    ActionTypes: keyMirror({
        APP_LOADED: null,
        LOGIN_PROCESSING: null,
        LOGIN_DONE: null,
        LOGIN_ERROR: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};