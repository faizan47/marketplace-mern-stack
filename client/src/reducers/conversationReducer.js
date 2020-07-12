import { GET_CONVERSATION, SEND_MESSAGE } from '../actions/types';

const messagesReducer = (state = null, action) => {
	switch (action.type) {
		case GET_CONVERSATION:
			return action.payload;
		case SEND_MESSAGE:
			return action.payload;
		default:
			return state;
	}
};

export default messagesReducer;
