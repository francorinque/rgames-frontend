import { genresTypes } from '../actions/actionsTypes'

const initialState = {
	genres: [],
	isLoading: false,
	error: null,
}

const genresReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case genresTypes.FETCH_GENRES:
			return { ...state, isLoading: true }

		case genresTypes.FETCH_GENRES_SUCCESS: {
			let sortGenres = payload.sort((a, b) => a.name.localeCompare(b.name))
			return { ...state, isLoading: false, genres: sortGenres }
		}

		default:
			return state
	}
}

export default genresReducer
