import { combineReducers } from "redux";
import albumsReducer from "./albumsReducer";
import usersReducer from "./usersReducer";
import photosReducer from "./photosReducer";

export default combineReducers({
  albums: albumsReducer,
  users: usersReducer,
  photos: photosReducer
});
