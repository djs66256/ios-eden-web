/**
 * Created by daniel on 16/5/12.
 */

import dispatcher from '../dispatcher/AppDispatcher';
import UserContants from '../constants/UserConstants';

export default {
    login: function (text) {
        dispatcher.dispatch({
            actionType: UserContants.LOGIN,
            text
        })
    }
}