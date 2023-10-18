import { usePagination } from '../../hooks/usePagination'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

import style from './Pagination.module.css'

const Pagination = () => {
	const {
		handlePrev,
		handleNext,
		page,
		input,
		handleKeyDown,
		handleChange,
		handleBlur,
		totalPages,
	} = usePagination()

	return (
		<div className={style.container}>
			<button
				onClick={handlePrev}
				disabled={page === 1}
				className={style.arrows}
			>
				<FaAngleLeft />
			</button>

			<div className={style.numberPageContainer}>
				<input
					type="text"
					onBlur={handleBlur}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					value={input}
				/>
				<span>Of: {totalPages}</span>
			</div>

			<button
				onClick={handleNext}
				disabled={page >= totalPages}
				className={style.arrows}
			>
				<FaAngleRight />
			</button>
		</div>
	)
}
export default Pagination
