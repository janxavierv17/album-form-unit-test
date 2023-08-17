export const POST_USER = "POST_USER";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const POST_USER_ERROR = "POST_USER_ERROR";

export const postUser = (user) => {
	return {
		type: POST_USER,
		payload: user,
	};
};

export const postUserSuccess = (response) => {
	return {
		type: POST_USER_SUCCESS,
		payload: response,
	};
};

export const postUserError = (error) => {
	return {
		type: POST_USER_ERROR,
		payload: error,
	};
};
