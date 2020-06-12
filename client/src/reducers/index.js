import { combineReducers } from 'redux';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from '../actions/types';
import { reducer as formReducer } from 'redux-form';

const authReducer = (state = {}, action) => {
	switch (action.type) {
		case SIGN_IN:
			return action.payload;
		case SIGN_UP:
			return action.payload;
		case SIGN_OUT:
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({ auth: authReducer, form: formReducer });
