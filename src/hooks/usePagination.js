import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../redux/actions/vGamesActions";
import { useEffect, useState } from "react";
import showModalAlert from "../utils/showModalAlert";

export const usePagination = () => {
  const { page, shownvGames } = useSelector((state) => state.vGames);
  const dispatch = useDispatch();
  const [input, setInput] = useState(1);

  const perPage = 15;
  const totalPages = Math.ceil(shownvGames?.length / perPage);
  const from = (page - 1) * perPage; // 0
  const to = page * perPage; // 15

  // useEffect(() => {
  //   setInput(1);
  // }, [totalPages]);

  useEffect(() => {
    setInput(page);
  }, [page]);

  const handlePrev = () => {
    setInput("");
    dispatch(changePage(page - 1));
    setInput(page - 1);
  };
  const handleNext = () => {
    setInput("");
    dispatch(changePage(page + 1));
    setInput(page + 1);
  };

  const handleBlur = () => setInput(page);

  const handleKeyDown = (e) => {
    const inputToNumber = Number(input);

    if (e.keyCode === 13) {
      if (isNaN(input)) {
        showModalAlert(dispatch, "Insert a valid page");
      } else if (inputToNumber > totalPages || inputToNumber <= 0)
        showModalAlert(dispatch, `Page: ${inputToNumber} does not exist`);
      else dispatch(changePage(inputToNumber));
    }
  };

  const handleChange = (e) => setInput(e.target.value);

  return {
    handlePrev,
    handleNext,
    page,
    input,
    handleKeyDown,
    handleChange,
    handleBlur,
    totalPages,
    from,
    to,
  };
};
