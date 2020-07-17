import {
    FETCH_MY_LISTINGS,
    FETCH_LISTING_BY_ID,
    DELETE_LISTING,
    UPDATE_LISTING,
    MARK_LISTING_AS_COMPLETE
} from '../actions/types';

const myListingsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_MY_LISTINGS:
            return action.payload;
        case UPDATE_LISTING:
            return action.payload;
        case MARK_LISTING_AS_COMPLETE:
            const filtered = state.filter(({ _id }) => action.payload._id !== _id);
            return [...filtered, action.payload];
        case FETCH_LISTING_BY_ID:
            return state.some(({ _id }) => _id === action.payload[0]._id) ? state : action.payload;
        case DELETE_LISTING:
            return state.filter(({ _id }) => _id !== action.payload);
        default:
            return state;
    }
};

export default myListingsReducer;
