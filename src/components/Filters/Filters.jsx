import { useDispatch } from "react-redux"
import {
  changePage,
  filterByName,
  filterByOrigin,
  filterByRating,
  filterGenre,
} from "../../redux/actions/vGamesActions"
import Origin from "../Origin/Origin"
import ByName from "../Order/ByName"
import ByRating from "../Order/ByRating"
import Genres from "../Genres/Genres"
import { FaArrowRotateLeft } from "react-icons/fa6"
import FiltersContainer from "./FiltersContainer"

import style from "./Filters.module.css"

const Filters = ({ onReset }) => {
  const dispatch = useDispatch()

  const handleFilterOrigin = (e) => {
    const { value } = e.target
    dispatch(changePage(1))
    dispatch(filterByOrigin(value))
  }

  const handleFilterOrderByName = (e) => {
    const { value } = e.target
    dispatch(filterByName(value))
    dispatch(changePage(1))
    // if (value === 'A-Z') {
    // 	dispatch(filterByName(value))
    // 	dispatch(changePage(1))
    // } else if (value === 'Z-A') {
    // 	dispatch(filterByName(value))
    // 	dispatch(changePage(1))
    // }
  }
  const handleFilterOrderByRating = (e) => {
    const { value } = e.target
    dispatch(filterByRating(value))
    dispatch(changePage(1))
    // if (value === "best") {
    //   dispatch(changePage(1))
    //   dispatch(filterByRating(value))
    // } else if (value === "worst") {
    //   dispatch(changePage(1))
    //   dispatch(filterByRating(value))
    // }
  }

  const handleGenre = (e) => {
    dispatch(filterGenre(e.target.value))
    dispatch(changePage(1))
  }

  return (
    <div className={style.container}>
      <div className={style.filters}>
        <FiltersContainer>
          <Genres onGenre={handleGenre} />
        </FiltersContainer>
        <FiltersContainer>
          <Origin onOrigin={handleFilterOrigin} />
        </FiltersContainer>
        <FiltersContainer>
          <ByName onName={handleFilterOrderByName} />
        </FiltersContainer>
        <FiltersContainer>
          <ByRating onRating={handleFilterOrderByRating} />
        </FiltersContainer>
      </div>
      <button
        type="button"
        onClick={onReset}
        className={style.btn}
        title="reset"
      >
        <FaArrowRotateLeft />
      </button>
    </div>
  )
}
export default Filters
