import { all, takeLatest } from "redux-saga/effects";
import { PHOTOS_ACTIONS } from "../actions/photosActions";
import { POST_USER } from "../actions/usersActions";
import { getPhotosByAlbumId } from "./getPhotosByAlbumId";
import { postUserSaga } from "./postUser";

function* rootSaga() {
	yield all([
		takeLatest(PHOTOS_ACTIONS.FETCH_PHOTOS, getPhotosByAlbumId),
		takeLatest(POST_USER, postUserSaga),
	]);
}

export default rootSaga;
