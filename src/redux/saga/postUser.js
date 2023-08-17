import { put, call } from "redux-saga/effects";
import { postUserSuccess, postUserError } from "../actions/usersActions";
import axios from "axios";

export const postUserApi = (user) => {
	return axios.post("https://jsonplaceholder.typicode.com/posts", user);
};

export function* postUserSaga(action) {
	try {
		const response = yield call(postUserApi, action.payload);
		yield put(postUserSuccess(response.data));
	} catch (error) {
		yield put(postUserError(error));
	}
}
