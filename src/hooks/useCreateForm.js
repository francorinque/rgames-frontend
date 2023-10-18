import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { instance } from "../api/api";
import validate from "../utils/validate";
import { fetchGames } from "../redux/actions/vGamesActions";
import showModalAlert from "../utils/showModalAlert";

export const useCreateForm = () => {
  const [newVideogame, setNewVideogame] = useState({
    name: "",
    description: "",
    image: "",
    platforms: "",
    release_date: "",
    rating: "",
    genres: [],
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //functions
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setNewVideogame({
      ...newVideogame,
      [name]: value,
    });
    setErrors(validate({ ...newVideogame, [name]: value }));
  };

  const handleGenreChange = (e) => {
    const { value, name } = e.target;
    let genres = [...newVideogame.genres];

    if (newVideogame.genres.includes(value)) {
      genres = newVideogame.genres.filter((genre) => genre !== value);
    } else genres.push(value);

    setNewVideogame({
      ...newVideogame,
      [name]: genres,
    });
    setErrors(validate({ ...newVideogame, [name]: genres }));
  };

  const handleCreate = async (newVideogame) => {
    try {
      const created = (await instance.post("/videogames", newVideogame)).data;
      if (created) {
        alert("Videogame was created succesfully");
        navigate(`/detail/${created?.id}`);
      }
    } catch (error) {
      showModalAlert(dispatch, error.response.data.error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      Object.values(errors).length === 0 &&
      Object.values(newVideogame).toString().trim().replaceAll(",", "")
    ) {
      await handleCreate(newVideogame);
      dispatch(fetchGames());
    } else showModalAlert(dispatch, "Empty fields");
  };
  return {
    errors,
    newVideogame,
    handleInputChange,
    handleGenreChange,
    handleSubmit,
  };
};
