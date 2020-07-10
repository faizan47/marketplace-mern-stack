import { GET_CONVERSATION } from '../actions/types';

const messagesReducer = (state = null, action) => {
	switch (action.type) {
		case GET_CONVERSATION:
			return action.payload;
		default:
			return state;
	}
};

export default messagesReducer;
