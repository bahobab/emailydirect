import axios from 'axios';

import {actionTypes} from './actionTypes';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: actionTypes.USER_FETCHED, payload: res.data})
}