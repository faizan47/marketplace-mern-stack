import { FETCH_MY_LISTINGS, FETCH_LISTING_BY_ID, DELETE_LISTING, UPDATE_LISTING } from '../actions/types';

const myListingsReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_MY_LISTINGS:
			return action.payload;
		case UPDATE_LISTING:
			return action.payload;
		case FETCH_LISTING_BY_ID:
			return action.payload;
		case DELETE_LISTING:
			return state.filter(({ _id }) => _id !== action.payload);
		default:
			return state;
	}
};

export default myListingsReducer;
