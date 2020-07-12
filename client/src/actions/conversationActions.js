import axios from 'axios';
import { GET_CONVERSATION, SEND_MESSAGE } from './types';
import { toast } from 'react-toastify';

export const getConversation = id => async dispatch => {
	try {
		const response = await axios.get(`/api/conversation/${id}`);
		dispatch({ type: GET_CONVERSATION, payload: response.data });
	} catch (error) {
		toast.error(error.response.data.message);
	}
};
export const sendMessage = (values, id) => async dispatch => {
	try {
		const response = await axios.post(`/api/conversation/${id}`, { values });
		dispatch({ type: SEND_MESSAGE, payload: response.data });
	} catch (error) {
		console.log({ ...error });

		toast.error('SOMETHING WENT WRONG');
	}
};
