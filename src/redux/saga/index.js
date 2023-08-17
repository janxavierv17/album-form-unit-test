import { all, takeLatest } from "redux-saga/effects";
import { PHOTOS_ACTIONS } from "../actions/photosActions";
import { getPhotosByAlbumId } from "./getPhotosByAlbumId";

function* rootSaga() {
	yield all([
		yield takeLatest(PHOTOS_ACTIONS.FETCH_PHOTOS, getPhotosByAlbumId),
	]);
}

export default rootSaga;
