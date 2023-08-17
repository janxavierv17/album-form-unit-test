import {
	POST_USER,
	POST_USER_ERROR,
	POST_USER_SUCCESS,
} from "../actions/usersActions";

const initialState = {
	user: null,
	loading: false,
	error: false,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_USER:
			return {
				...state,
				loading: true,
				error: false,
			};
		case POST_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				loading: false,
				error: false,
			};
		case POST_USER_ERROR:
			return {
				...state,
				errorData: action.payload,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};
