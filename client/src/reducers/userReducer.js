import {
	SIGN_IN,
	SIGN_OUT,
	SIGN_UP,
	FETCH_USER,
	ADD_TO_FAVOURITES,
	REMOVE_FROM_FAVOURITES,
	ADD_CREDITS,
	CREATE_MESSAGE
} from '../actions/types';

const userReducer = (state = '', action) => {
	switch (action.type) {
		case SIGN_IN:
			return action.payload;
		case SIGN_UP:
			return false;
		case SIGN_OUT:
			return action.payload;
		case FETCH_USER:
			return action.payload;
		case ADD_CREDITS:
			return action.payload;
		case CREATE_MESSAGE:
			return action.payload;
		case ADD_TO_FAVOURITES:
			return { ...state, favourites: action.payload };
		case REMOVE_FROM_FAVOURITES:
			return { ...state, favourites: action.payload };
		default:
			return state;
	}
};
export default userReducer;
