import axios from 'axios';
import { GET_CONVERSATION } from './types';
import { toast } from 'react-toastify';
	
export const getConversation = id => async dispatch => {
	try {
		const response = await axios.get(`/api/conversation/${id}`);
		dispatch({ type: GET_CONVERSATION, payload: response.data });
	} catch (error) {
		toast.error(error.response.data.message);
	}
};
