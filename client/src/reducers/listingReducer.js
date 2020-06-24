import { FETCH_LISTINGS, CREATE_LISTING } from '../actions/types';

const listingReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_LISTINGS:
			return action.payload;
		case CREATE_LISTING:
			return action.payload;
		default:
			return state;
	}
};

export default listingReducer;
