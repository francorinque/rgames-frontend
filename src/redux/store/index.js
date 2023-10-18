import { combineReducers, createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import vGamesReducer from "../reducers/vGamesReducer";
import detailReducer from "../reducers/detailReducer";
import genresReducer from "../reducers/genresReducer";
import modalReducer from "../reducers/modalReducer";
//reducers
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Crea una función middleware con Redux Thunk
const middleware = [thunk];

const rootReducer = combineReducers({
  vGames: vGamesReducer,
  detail: detailReducer,
  genres: genresReducer,
  modal: modalReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middleware))
);
export default store;
