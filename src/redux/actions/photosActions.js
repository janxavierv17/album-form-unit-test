export const PHOTOS_ACTIONS = {
	SET_PHOTOS: "SET_PHOTOS",
	FETCH_PHOTOS: "FETCH_PHOTOS",
	FETCH_PHOTOS_ERROR: "FETCH_PHOTOS_ERROR",
};

export const setPhotos = (photos) => {
	return {
		type: PHOTOS_ACTIONS.SET_PHOTOS,
		payload: photos,
	};
};

export const getPhotosError = (error) => {
	return {
		type: PHOTOS_ACTIONS.FETCH_PHOTOS_ERROR,
		payload: error,
	};
};
