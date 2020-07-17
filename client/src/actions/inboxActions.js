import { INITIALIZE_CONVERSATION, GET_INBOX } from './types';
import axios from 'axios';
import { toast } from 'react-toastify';

export const initializeConversation = (message, history) => async dispatch => {
    try {
        const response = await axios.post('/api/conversation', message);
        dispatch({ type: INITIALIZE_CONVERSATION, payload: response.data });
        history.push('/inbox');
        toast.success('Message sent successfully!');
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

export const getInbox = () => async dispatch => {
    try {
        const response = await axios.get('/api/conversation');
        dispatch({ type: GET_INBOX, payload: response.data });
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    }
};
