import { put, call } from "redux-saga/effects";
import axios from "axios";
import { setPhotos, getPhotosError } from "../actions/photosActions";

const fetchPhotosApi = async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/photos?albumId=1"
	);
	return response.data;
};

export function* getPhotosByAlbumId() {
	try {
		const response = yield call(fetchPhotosApi);
		yield put(setPhotos(response));
	} catch (error) {
		yield put(getPhotosError(error));
	}
}
