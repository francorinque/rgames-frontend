import { FaArrowRight, FaXmark } from "react-icons/fa6"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteGame } from "../../redux/actions/vGamesActions"
import noPoster from "../../assets/no-poster.jpg"

import style from "./Card.module.css"

const Card = (props) => {
  const { id, name, image, rating, created } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let urlImage = !image?.includes("https") ? noPoster : image

  const handleDelete = () => {
    const confirmDelete = confirm("you're sure?")
    console.log(id)
    if (confirmDelete) dispatch(deleteGame(id))
    else return
  }

  return (
    <div className={style.box}>
      <img src={urlImage} alt={name} className={style.image} loading="lazy" />

      <div className={style.boxInner}>
        {created === true && (
          <button className={style.clear} onClick={handleDelete}>
            <FaXmark />
          </button>
        )}

        <div className={style.rating}>
          <p>{Number(rating).toFixed(1)}</p>
        </div>

        <div className={style.text}>
          <h2 className={style.name}>
            {name.length > 20 ? `${name.substring(0, 20)}...` : name}
          </h2>

          <div
            onClick={() => navigate(`/detail/${id}`)}
            className={style.viewMore}
          >
            view more
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
