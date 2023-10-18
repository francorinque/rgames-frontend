import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import style from './Logo.module.css'

const Logo = () => {
	const location = useLocation()

	return location.pathname !== '/' ? (
		<Link className={style.logo} to="/home">
			RGames
		</Link>
	) : (
		<div className={style.logo}>RGames</div>
	)
}
export default Logo
