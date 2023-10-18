import { NavLink } from 'react-router-dom'
import Logo from "../Logo/Logo"

import style from './Nav.module.css'

const Nav = () => {
	return (
		<header className={style.header}>
			<nav className={style.nav}>
				<Logo size="30px" />
				<ul className={style.menu}>
					<li>
						<NavLink
							to="/home"
							className={({ isActive }) => (isActive ? style.active : '')}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/create"
							className={({ isActive }) => (isActive ? style.active : '')}
						>
							Create
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? style.active : '')}
						>
							Logout
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
export default Nav
