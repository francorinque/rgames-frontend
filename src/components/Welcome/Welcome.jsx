import { useNavigate } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa6'
import { useState } from 'react'

import style from './Welcome.module.css'

const Welcome = () => {
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()
	const handleClick = () => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			navigate('/home')
		}, 1000)
	}

	return (
		<section className={style.welcome}>
			<div className={style.text}>
				<div>WELCOME</div>
				<div className={style.roller}>
					<span className={style.rollerText}>
						DISCOVER
						<br />
						YOUR FAVORITES
						<br />
						VIDEOGAMES
					</span>
				</div>

				{loading ? (
					<div className={style.loader}></div>
				) : (
					<button onClick={handleClick} className={style.btn}>
						<FaPlay />
					</button>
				)}
			</div>
		</section>
	)
}
export default Welcome
