import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import noPoster from "../../assets/no-poster.jpg";

import style from "./Detail.module.css";

const Detail = ({ detail }) => {
  const { name, description, image, platforms, release_date, rating, genres } =
    detail;
  const navigate = useNavigate();

  let urlImage = !image?.includes("https") ? noPoster : image;

  return (
    <section className={style.detail}>
      <button onClick={() => navigate("/home")} className={style.back}>
        <FaAngleLeft />
      </button>
      {/* img */}
      <div className={style.poster}>
        <img src={urlImage} alt={name} />
      </div>
      {/* name */}
      <div className={style.text}>
        <div className={style.name}>
          <h2>{name}</h2>
        </div>

        {/* description */}
        <div>
          <h4 className={style.colorShared}>Description:</h4>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className={style.divDescription}
          ></div>
        </div>
        <div className={style.flex}>
          {/* platforms */}
          <div>
            <h4 className={style.colorShared}>Platforms:</h4>
            <div className={style.platformsWrapper}>
              {/* {platformsToArray?.map(p => (
								<div key={p.id}>{p.name}</div>
							))} */}

              {Array.isArray(platforms)
                ? platforms?.map((p) => <div key={p.id}>{p.name}</div>)
                : platforms}
            </div>
          </div>

          {/* released */}
          <div>
            <h4 className={style.colorShared}>Released:</h4>{" "}
            <p className={style.textOpacity}>{release_date}</p>
          </div>
          {/* rating */}
          <div>
            <h4 className={style.colorShared}>Rating:</h4>{" "}
            <p className={style.textOpacity}>{Number(rating).toFixed(1)}</p>
          </div>
          {/* genres */}
          <div>
            <h4 className={style.colorShared}>Genres: </h4>
            <div>
              <span className={style.textOpacity}>
                {genres?.length > 0
                  ? genres?.map((g) => g.name).join(", ")
                  : "Not genres available"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Detail;
