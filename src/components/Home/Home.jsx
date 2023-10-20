import { useEffect, Suspense, lazy, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGames, fetchGenres } from "../../redux/actions/vGamesActions"
import { FaAngleUp } from "react-icons/fa6"
//components
import { usePagination } from "../../hooks/usePagination"
import { useSearchBar } from "../../hooks/useSearchBar"

import SearchBar from "../SearchBar/SearchBar"
import Filters from "../Filters/Filters"
import Pagination from "../Pagination/Pagination"
const CardsLazy = lazy(() => import("../Cards/Cards"))

import style from "./Home.module.css"

const Home = () => {
  const [scrollUpClass, setScrollUpClass] = useState(false)
  const { shownvGames, isLoading, error } = useSelector((state) => state.vGames)
  const { from, to } = usePagination()
  const { handleChange, handleSubmit, handleResetGames, input } = useSearchBar()

  const dispatch = useDispatch()

  useEffect(() => {
    if (shownvGames?.length === 0) {
      dispatch(fetchGenres())
      dispatch(fetchGames())
    }
  }, [])

  //scroll
  const scrolled = () => {
    if (scrollY > 300) {
      setScrollUpClass(true)
    } else {
      setScrollUpClass(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrolled)
    return () => window.removeEventListener("scroll", scrolled)
  }, [])

  const displayedGames = shownvGames?.slice(from, to)

  return (
    <section className={style.container}>
      <div className={style.banner}>
        <SearchBar
          value={input}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
      <Filters onReset={handleResetGames} />
      {shownvGames?.length > 15 && <Pagination />}

      {isLoading ? (
        <div className={style.loader}></div>
      ) : !displayedGames.length ? (
        <h4 className={style.empty}>No results :(</h4>
      ) : (
        <Suspense>
          <CardsLazy allGames={displayedGames} />
        </Suspense>
      )}

      {error && <h4>{error}</h4>}

      <button
        className={`${style.scrollUp} ${scrollUpClass && style.show}`}
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <FaAngleUp />
      </button>
    </section>
  )
}
export default Home
