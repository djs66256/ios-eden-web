/**
 * Created by daniel on 16/5/12.
 */

import dispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import UserConstants from '../constants/UserConstants'
import { jsonRequest } from './request'

const  UserStore = assign({}, EventEmitter.prototype, {

});

dispatcher.register(action => {
    console.log('action => '+action);
    switch (action.actionType) {
        case UserConstants.LOGIN:
            console.log('login');
            jsonRequest({
                method: 'POST',
                url:"/session",
                data: action.text
            }).catch(err=>console.log(err)).then(data=>console.log(data));
            break;
        case UserConstants.LOGOUT:
            break;
        default:
    }
});



export default UserStore;