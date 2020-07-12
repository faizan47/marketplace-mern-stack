import { CREATE_MESSAGE, GET_MESSAGES } from './types';
import axios from 'axios';
import { toast } from 'react-toastify';

export const createMessage = (message, history) => async dispatch => {
	try {
		const response = await axios.post('/api/conversation', message);
		dispatch({ type: CREATE_MESSAGE, payload: response.data });
		history.push('/messages/');
		toast.success('Message sent successfully!');
	} catch (error) {
		toast.error(error.response.data.message);
	}
};

export const getMessages = () => async dispatch => {
	try {
		const response = await axios.get('/api/conversation');
		dispatch({ type: GET_MESSAGES, payload: response.data });
	} catch (error) {
		toast.error(error.response.data.message);
	}
};
