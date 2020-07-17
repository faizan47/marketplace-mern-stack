import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "./types";
import axios from "axios";
import { toast } from "react-toastify";

export const addToFavourites = listingId => async dispatch => {
    try {
        const response = await axios.post("/api/favourites/", { listingId });
        dispatch({ type: ADD_TO_FAVOURITES, payload: response.data });
        toast.info(`Added to Favourites`);
    } catch (error) {
        toast.error(error.response.data.message);
    }
};
export const removeFromFavourites = listingId => async dispatch => {
    const response = await axios.delete(`/api/favourites/${listingId}`);
    dispatch({ type: REMOVE_FROM_FAVOURITES, payload: response.data });
};
