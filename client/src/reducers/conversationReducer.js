import { GET_CHAT_BY_ID, SEND_MESSAGE } from '../actions/types';

const messagesReducer = (state = [], action) => {
	switch (action.type) {
		case GET_CHAT_BY_ID:
			return action.payload;
		case SEND_MESSAGE:
			return action.payload;
		default:
			return state;
	}
};

export default messagesReducer;
