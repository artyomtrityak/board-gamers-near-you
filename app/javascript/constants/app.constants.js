'use strict';

//var keyMirror = require('react/lib/keyMirror');
import keyMirror from 'react/lib/keyMirror';

export default {
    ActionTypes: keyMirror({
        FACEBOOK_LOADED: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};