import { GET_INBOX } from '../actions/types';

const messagesReducer = (state = [], action) => {
	switch (action.type) {
		case GET_INBOX:
			return action.payload;
		default:
			return state;
	}
};

export default messagesReducer;
