import { filtersTypes, vGamesTypes } from "../actions/actionsTypes";

const initialState = {
  vGamesOriginal: [],
  vGamesFiltered: [],
  shownvGames: [],
  isLoading: false,
  error: null,
  page: 1,
};

const vGamesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // * GAMES
    case vGamesTypes.FETCH_GAMES:
      return { ...state, isLoading: true };

    case vGamesTypes.FETCH_GAMES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        shownvGames: payload,
        vGamesOriginal: payload,
      };

    case vGamesTypes.RESET_GAMES:
      return {
        ...state,
        shownvGames: state.vGamesOriginal,
        vGamesFiltered: state.vGamesOriginal,
      };

    case vGamesTypes.FETCH_GAMES_FAILED:
      return { ...state, isLoading: false, error: payload };

    case vGamesTypes.DELETE_VIDEOGAME: {
      const cleanGames = [...state.vGamesOriginal].filter(
        (g) => g.id !== payload
      );
      const filtered = [...state.vGamesFiltered].filter(
        (g) => g.id !== payload
      );
      return {
        ...state,
        vGamesOriginal: cleanGames,
        vGamesFiltered: filtered,
        shownvGames: filtered,
      };
    }

    // * SEARCH BY GAME
    case vGamesTypes.FETCH_BY_NAME: {
      return {
        ...state,
        shownvGames: payload,
        vGamesFiltered: state.vGamesFiltered.length === 0 && payload,
      };
    }

    // * PAGINATION
    case vGamesTypes.CHANGE_PAGE:
      return { ...state, page: payload };

    // * FILTERS
    case filtersTypes.FILTER_BY_GENRE: {
      let filtered = null;

      if (state.vGamesFiltered.length === 0) {
        filtered =
          [...state.vGamesOriginal].filter((vGame) => {
            return vGame.genres.some((genre) => genre.name === payload);
          }) || [];
      } else {
        filtered =
          [...state.vGamesFiltered].filter((vGame) => {
            return vGame.genres.some((genre) => genre.name === payload);
          }) || [];
      }

      return {
        ...state,
        shownvGames: payload === "ALL" ? state.vGamesOriginal : filtered,
        vGamesFiltered: payload === "ALL" ? state.vGamesOriginal : filtered,
      };
    }

    case filtersTypes.FILTER_BY_NAME: {
      const orderedByName = [...state.shownvGames].sort((a, b) => {
        return payload === "Z-A"
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name);
      });
      return {
        ...state,
        shownvGames: orderedByName,
      };
    }

    case filtersTypes.FILTER_BY_RATING: {
      const orderedByRating = [...state.shownvGames].sort((a, b) => {
        return payload === "best" ? b.rating - a.rating : a.rating - b.rating;
      });

      return { ...state, shownvGames: orderedByRating };
    }

    case filtersTypes.FILTER_BY_ORIGIN: {
      let filteredByOrigin =
        state.vGamesFiltered.length === 0
          ? [...state.vGamesOriginal].filter((game) => game.created === true)
          : [...state.vGamesFiltered].filter((game) => game.created === true);

      return {
        ...state,
        shownvGames:
          payload === "default" ? state.vGamesFiltered : filteredByOrigin,
      };
    }

    default:
      return state;
  }
};

export default vGamesReducer;
