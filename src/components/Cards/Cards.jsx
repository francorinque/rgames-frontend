import Card from '../Card/Card'

import style from './Cards.module.css'

const Cards = ({ allGames }) => {
	return (
		<section className={style.container}>
			{allGames && allGames.map(game => <Card {...game} key={game.id} />)}
		</section>
	)
}
export default Cards
