function validate(formData) {
  let errors = {};

  var especialCharRegExp = /[^a-zA-Z0-9\s]/;

  //*name
  if (!formData.name.trim().length) errors.name = "Insert a name";
  else if (especialCharRegExp.test(formData.name)) {
    errors.name = "Must not contain special characters";
  } else if (formData.name.length < 5)
    errors.name = "Name must be more 5 characters";

  //* description
  if (!formData.description.trim().length)
    errors.description = "Insert a description";
  else if (!isNaN(Number(formData.description))) {
    errors.description = "Description must be text";
  } else if (
    formData.description.length < 5 ||
    formData.description.length > 100
  ) {
    errors.description = "Description must be between 5 and 100 characters";
  }

  //* image
  if (!formData.image.trim().length) {
    errors.image = "Insert a image";
  }

  //*platforms
  if (!formData.platforms.trim().length) errors.platforms = "Insert a platform";
  else if (especialCharRegExp.test(formData.platforms)) {
    errors.platforms = "Please, enter only one platform";
  }

  //* release_date
  if (!formData.release_date.length)
    errors.release_date = "Insert a release date";

  //* rating
  if (!formData.rating.length) errors.rating = "Insert a rating";
  else if (Number(formData.rating) < 0 || Number(formData.rating) > 10) {
    errors.rating = "rating must be between 0 and 10";
  }

  //*genres
  if (!formData.genres.length) errors.genres = "Select one genre";

  return errors;
}

export default validate;
