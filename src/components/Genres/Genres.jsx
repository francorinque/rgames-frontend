import { useSelector } from "react-redux"

const Genres = ({ onGenre }) => {
  const { genres, isLoading } = useSelector((state) => state.genres)

  return isLoading ? (
    <span>Loading genres...</span>
  ) : (
    <>
      <h4>Genre:</h4>
      <select onChange={onGenre}>
        <option value="ALL">All games</option>
        {genres &&
          genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
      </select>
    </>
  )
}
export default Genres
