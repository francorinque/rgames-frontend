import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { clearDetail, fetchDetail } from '../../redux/actions/vGamesActions'
import notFound from '../../assets/not-found.png'
import Detail from '../../components/Detail/Detail'

import style from './DetailPage.module.css'

const DetailPage = () => {
	const params = useParams()
	const dispatch = useDispatch()

	const { detail, isLoading, error } = useSelector(state => state.detail)

	useEffect(() => {
		dispatch(fetchDetail(params?.id))
		window.scrollTo({ top: 0 })

		return () => dispatch(clearDetail())
	}, [params.id])

	return (
		<section className={style.detailpage}>
			{isLoading ? (
				<div className={style.loader}></div>
			) : error ? (
				<img
					src={notFound}
					alt="image not found 404"
					className={style.notfound}
				/>
			) : (
				<Detail detail={detail} />
			)}
		</section>
	)
}
export default DetailPage
