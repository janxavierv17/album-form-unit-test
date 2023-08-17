const initialState = {
	photos: [],
};

const photoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_PHOTOS":
			return { ...state, loading: true, error: false };
		case "SET_PHOTOS":
			return {
				...state,
				photos: action.payload,
				loading: false,
				error: false,
			};
		case "FETCH_PHOTOS_ERROR":
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default photoReducer;
