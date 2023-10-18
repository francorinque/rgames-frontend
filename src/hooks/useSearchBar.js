import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changePage,
  fetchByName,
  resetGames,
} from "../redux/actions/vGamesActions";
import showModalAlert from "../utils/showModalAlert";

export const useSearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  //search
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      showModalAlert(dispatch, "Enter a videogame");
      return;
    }
    dispatch(fetchByName(input));
    dispatch(changePage(1));
    setInput("");
  };

  const handleResetGames = () => {
    dispatch(changePage(1));
    dispatch(resetGames());
  };

  return {
    handleChange,
    handleSubmit,
    handleResetGames,
    input,
  };
};
