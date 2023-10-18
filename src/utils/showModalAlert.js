import { modalTypes } from "../redux/actions/actionsTypes";

const showModalAlert = (dispatch, error) => {
  dispatch({ type: modalTypes.SHOW_MODAL, payload: error });
  setTimeout(() => {
    dispatch({ type: modalTypes.HIDDE_MODAL });
  }, 2000);
};

export default showModalAlert;
