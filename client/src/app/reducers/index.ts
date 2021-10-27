import { combineReducers } from 'redux';
import example from './example';
import auth from './auth';
import common from './common'
import modal from './modal'
export default combineReducers ({
    example,
    auth,
    common,
    modal
})