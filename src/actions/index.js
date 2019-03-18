import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_USER = "FETCH_USER";
export const FETCH_PHOTOS = "FETCH_PHOTOS";

export const fetchAlbums = () => async dispatch => {
  const response = await jsonPlaceholder.get("/albums");

  dispatch({ type: FETCH_ALBUMS, payload: response.data });
};

// Create fetchUser function that has argument of id and returns a function that has an argument of dispatch, that returns a function that calls _fetchUser with arguments id and dispatch
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: FETCH_USER, payload: response.data });
});

export const fetchPhotos = albumId => async dispatch => {
  const response = await jsonPlaceholder.get(`/photos?albumId=${albumId}`);

  dispatch({ type: FETCH_PHOTOS, payload: response.data });
};
