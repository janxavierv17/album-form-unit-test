import { combineReducers } from "redux";
import photoReducer from "./photoReducer";
import { userReducer } from "./userReducer";
export default combineReducers({
	album: photoReducer,
	user: userReducer,
});
