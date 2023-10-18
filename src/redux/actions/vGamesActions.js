import { instance } from "../../api/api";
import showModalAlert from "../../utils/showModalAlert";
import {
  detailTypes,
  filtersTypes,
  genresTypes,
  vGamesTypes,
} from "./actionsTypes";

// * GAMES
export const fetchGames = () => {
  return async (dispatch) => {
    dispatch({
      type: vGamesTypes.FETCH_GAMES,
    });
    try {
      const { data } = await instance.get("/videogames");
      return dispatch({
        type: vGamesTypes.FETCH_GAMES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
      return dispatch({
        type: vGamesTypes.FETCH_GAMES_FAILED,
        payload: "Error al cargar los videogames :(",
      });
    }
  };
};

export const fetchByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await instance.get(`/videogames?name=${name}`);
      return dispatch({
        type: vGamesTypes.FETCH_BY_NAME,
        payload: data,
      });
    } catch (error) {
      showModalAlert(dispatch, error.response.data.error);
    }
  };
};

export const fetchDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: detailTypes.FETCH_DETAIL });
      const { data } = await instance.get(`/videogames/${id}`);
      return dispatch({
        type: detailTypes.FETCH_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data.error);
      if (error.response.status === 500) {
        dispatch({
          type: detailTypes.FETCH_DETAIL_FAILED,
          payload: true,
        });
      }
    }
  };
};
export const clearDetail = () => ({ type: detailTypes.CLEAR_DETAIL });

export const deleteGame = (id) => {
  return async (dispatch) => {
    try {
      const data = await instance.delete(`/videogames/${id}`);

      if (data.status === 200) {
        dispatch({
          type: vGamesTypes.DELETE_VIDEOGAME,
          payload: id,
        });
      }

      alert(`${data.data.message}`);
    } catch (error) {
      alert(`${error.response.data.error}`);
    }
  };
};

export const resetGames = () => {
  return { type: vGamesTypes.RESET_GAMES };
};

//* PAGINATION
export const changePage = (newPage) => {
  return { type: vGamesTypes.CHANGE_PAGE, payload: newPage };
};

// * GENRES
export const fetchGenres = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: genresTypes.FETCH_GENRES });
      const { data } = await instance.get("/genres");
      return dispatch({
        type: genresTypes.FETCH_GENRES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

// * FILTERS
export const filterGenre = (genre) => {
  return { type: filtersTypes.FILTER_BY_GENRE, payload: genre };
};

export const filterByOrigin = (origin) => {
  return { type: filtersTypes.FILTER_BY_ORIGIN, payload: origin };
};

export const filterByName = (order) => {
  return { type: filtersTypes.FILTER_BY_NAME, payload: order };
};

export const filterByRating = (order) => {
  return { type: filtersTypes.FILTER_BY_RATING, payload: order };
};
