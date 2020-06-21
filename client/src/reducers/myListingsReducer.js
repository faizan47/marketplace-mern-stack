import { FETCH_MY_LISTINGS } from '../actions/types';

const myListingsReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_MY_LISTINGS:
			return action.payload;
		default:
			return state;
	}
};

export default myListingsReducer;
