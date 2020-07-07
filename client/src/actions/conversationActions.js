import { CREATE_CONVERSATION } from './types';
import axios from 'axios';
import { toast } from 'react-toastify';

export const createConversation = conversation => async dispatch => {
	try {
		const response = await axios.post('/api/conversation', conversation);
		dispatch({ type: CREATE_CONVERSATION, payload: response.data });
		toast.success('Message sent successfully!');
	} catch (error) {
		toast.error(error.response.data.message);
	}
};
