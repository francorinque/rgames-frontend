import { FaMagnifyingGlass } from 'react-icons/fa6'

import style from './SearchBar.module.css'

const SearchBar = ({ value, onChange, onSubmit }) => {
	return (
		<form onSubmit={onSubmit} className={style.container}>
			<input
				type="search"
				onChange={onChange}
				value={value}
				className={style.input}
				placeholder="Search your favorite videogame"
			/>
			<button type="submit" className={style.btn} title="search">
				<FaMagnifyingGlass />
			</button>
		</form>
	)
}
export default SearchBar
