import { combineReducers } from 'redux';
import { LOG_IN } from '../actions/types';

const authReducer = (state = {}, action) => {
	switch (action.type) {
		case LOG_IN:
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({ auth: authReducer });
