const ByRating = ({ onRating }) => {
	return (
		<>
			<h4>by rating:</h4>
			<select onChange={onRating} name="OrderByRating">
				<option>Select a option</option>
				<option value="best">Best rating first</option>
				<option value="worst">Worst rating first</option>
			</select>
		</>
	)
}
export default ByRating
