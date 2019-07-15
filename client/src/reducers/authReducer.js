import {actionTypes} from '../actions/actionTypes';

export default function (state = null, action) {
    switch (action.type) {
        case actionTypes.USER_FETCHED:
            return action.payload || false
        default:
            return state
    }
}