import { useDispatch, useSelector } from "react-redux";
import { useCreateForm } from "../../hooks/useCreateForm";
import { useEffect } from "react";
import { fetchGenres } from "../../redux/actions/vGamesActions";
import InputField from "../InputField/InputField";

import style from "./CreateForm.module.css";

const CreateForm = () => {
  const { genres: allGenres } = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  const {
    errors,
    newVideogame,
    handleInputChange,
    handleGenreChange,
    handleSubmit,
  } = useCreateForm();

  useEffect(() => {
    if (allGenres?.length === 0) dispatch(fetchGenres());
  }, []);

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.title}>
        <h2>Create your videogame</h2>
      </div>
      <div className={style.innerBox}>
        <InputField
          inputType="input"
          type="text"
          label="Name:"
          placeholder="Insert a name"
          id="name"
          name="name"
          value={newVideogame.name}
          onChange={handleInputChange}
          error={errors.name}
        />
        <InputField
          inputType="input"
          type="text"
          label="Image:"
          placeholder="Insert a image"
          id="image"
          name="image"
          value={newVideogame.image}
          onChange={handleInputChange}
          error={errors.image}
        />

        <InputField
          inputType="input"
          type="platforms"
          label="Platforms:"
          placeholder="Insert platforms"
          id="platforms"
          name="platforms"
          value={newVideogame.platforms}
          onChange={handleInputChange}
          error={errors.platforms}
        />

        <InputField
          inputType="input"
          type="number"
          label="Rating:"
          placeholder="Insert a rating"
          id="rating"
          name="rating"
          value={newVideogame.rating}
          onChange={handleInputChange}
          error={errors.rating}
        />
        <InputField
          inputType="input"
          type="date"
          label="Release Date:"
          placeholder="Insert a release date"
          id="release_date"
          name="release_date"
          value={newVideogame.release_date}
          onChange={handleInputChange}
          error={errors.release_date}
        />
        <InputField
          inputType="textarea"
          placeholder="Insert a description"
          label="Description:"
          id="desc"
          name="description"
          value={newVideogame.description}
          onChange={handleInputChange}
          error={errors.description}
        />
        <InputField
          inputType="select"
          id="genres"
          label="Genres:"
          name="genres"
          error={errors.genres}
          value={newVideogame.genres}
          onChangeSelect={handleGenreChange}
        >
          {allGenres?.map((genre) => (
            <option value={genre.name} key={genre.id}>
              {genre.name}
            </option>
          ))}
        </InputField>
      </div>

      <button type="submit" className={style.btnSubmit}>
        Create
      </button>
    </form>
  );
};
export default CreateForm;
