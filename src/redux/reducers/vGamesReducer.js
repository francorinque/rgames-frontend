import { filtersTypes, vGamesTypes } from "../actions/actionsTypes"

const initialState = {
  vGamesOriginal: [],
  vGamesFiltered: [],
  shownvGames: [],
  isLoading: false,
  error: null,
  page: 1,
}

const vGamesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // * GAMES
    case vGamesTypes.FETCH_GAMES:
      return { ...state, isLoading: true }

    case vGamesTypes.FETCH_GAMES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        shownvGames: payload,
        vGamesOriginal: payload,
      }

    case vGamesTypes.RESET_GAMES:
      return {
        ...state,
        shownvGames: state.vGamesOriginal,
        vGamesFiltered: [],
      }

    case vGamesTypes.FETCH_GAMES_FAILED:
      return { ...state, isLoading: false, error: payload }

    case vGamesTypes.DELETE_VIDEOGAME: {
      const cleanGames = [...state.vGamesOriginal].filter(
        (g) => g.id !== payload
      )
      const filtered = [...state.vGamesFiltered].filter((g) => g.id !== payload)

      return {
        ...state,
        vGamesOriginal: cleanGames,
        vGamesFiltered: filtered,
        shownvGames: state.vGamesFiltered.length > 0 ? filtered : cleanGames,
      }
    }

    // * SEARCH BY GAME
    case vGamesTypes.FETCH_BY_NAME: {
      return {
        ...state,
        shownvGames: payload,
        vGamesFiltered: state.vGamesFiltered.length === 0 && payload,
      }
    }

    // * PAGINATION
    case vGamesTypes.CHANGE_PAGE:
      return { ...state, page: payload }

    // * FILTERS
    case filtersTypes.FILTER_BY_GENRE: {
      let filtered = null

      if (state.vGamesFiltered.length === 0) {
        filtered =
          [...state.vGamesOriginal].filter((vGame) => {
            return vGame.genres.some((genre) => genre.name === payload)
          }) || []
      } else {
        filtered =
          [...state.vGamesFiltered].filter((vGame) => {
            return vGame.genres.some((genre) => genre.name === payload)
          }) || []
      }

      return {
        ...state,
        shownvGames: payload === "ALL" ? state.vGamesOriginal : filtered,
        vGamesFiltered: payload === "ALL" ? state.vGamesOriginal : filtered,
      }
    }

    case filtersTypes.FILTER_BY_NAME: {
      let orderedByName = null

      if (payload === "Z-A") {
        orderedByName = [...state.shownvGames].sort((a, b) =>
          b.name.localeCompare(a.name)
        )
      } else if (payload === "A-Z") {
        orderedByName = [...state.shownvGames].sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      } else if (payload === "default") {
        orderedByName = [...state.vGamesFiltered]
      }

      return {
        ...state,
        shownvGames: orderedByName,
      }
    }

    case filtersTypes.FILTER_BY_RATING: {
      let orderedByRating = null

      if (payload === "best") {
        orderedByRating = [...state.shownvGames].sort(
          (a, b) => b.rating - a.rating
        )
      } else if (payload === "worst") {
        orderedByRating = [...state.shownvGames].sort(
          (a, b) => a.rating - b.rating
        )
      } else if (payload === "default") {
        orderedByRating =
          state.vGamesFiltered.length > 0
            ? [...state.vGamesFiltered]
            : [...state.vGamesOriginal]
      }

      return {
        ...state,
        shownvGames: orderedByRating,
      }
    }

    case filtersTypes.FILTER_BY_ORIGIN: {
      let filteredByOrigin = null

      if (payload === "created") {
        filteredByOrigin =
          state.vGamesFiltered.length > 0
            ? [...state.vGamesFiltered].filter((game) => game.created === true)
            : [...state.vGamesOriginal].filter((game) => game.created === true)
      } else if (payload === "default") {
        filteredByOrigin =
          state.vGamesFiltered.length > 0
            ? [...state.vGamesFiltered]
            : [...state.vGamesOriginal]
      }

      return {
        ...state,
        shownvGames: filteredByOrigin,
      }
    }

    default:
      return state
  }
}

export default vGamesReducer
