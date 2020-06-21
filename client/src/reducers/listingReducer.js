import { FETCH_LISTINGS } from '../actions/types';

const listingReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_LISTINGS:
			return action.payload;
		default:
			return state;
	}
};

export default listingReducer;
