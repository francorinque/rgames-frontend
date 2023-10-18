import { modalTypes } from "../actions/actionsTypes";

const initialState = {
  showme: false,
  msj: "",
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case modalTypes.SHOW_MODAL:
      return { ...state, showme: true, msj: payload };

    case modalTypes.HIDDE_MODAL:
      return { ...state, showme: false, msj: "" };

    default:
      return state;
  }
};

export default modalReducer;
