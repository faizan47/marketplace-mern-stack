import { GET_MESSAGES } from '../actions/types';

const messagesReducer = (state = [], action) => {
	switch (action.type) {
		case GET_MESSAGES:
			return action.payload;
		default:
			return state;
	}
};

export default messagesReducer;
