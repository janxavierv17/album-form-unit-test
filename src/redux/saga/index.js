import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
	PHOTOS_ACTIONS,
	setPhotos,
	getPhotosError,
} from "../actions/photosActions";
function* fetchPhotos() {
	try {
		const response = yield axios.get(
			"https://jsonplaceholder.typicode.com/photos?albumId=1"
		);
		yield put(setPhotos(response.data));
	} catch (error) {
		yield put(getPhotosError(error));
	}
}

function* rootSaga() {
	yield all([yield takeLatest(PHOTOS_ACTIONS.FETCH_PHOTOS, fetchPhotos)]);
}

export default rootSaga;
