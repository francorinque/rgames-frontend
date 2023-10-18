import { detailTypes } from '../actions/actionsTypes'

const initialState = {
	detail: {},
	isLoading: false,
	error: null,
}

const detailReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case detailTypes.FETCH_DETAIL:
			return { ...state, isLoading: true }

		case detailTypes.FETCH_DETAIL_SUCCESS:
			return { ...state, isLoading: false, error: null, detail: payload }

		case detailTypes.FETCH_DETAIL_FAILED:
			return { ...state, detail: {}, isLoading: false, error: payload }

		case detailTypes.CLEAR_DETAIL:
			return { ...state, isLoading: false, error: null, detail: {} }

		default:
			return state
	}
}
export default detailReducer
