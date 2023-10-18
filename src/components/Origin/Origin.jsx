const Origin = ({ onOrigin }) => {
	return (
		<>
			<h4>Origin:</h4>
			<select onChange={onOrigin}>
				<option value="default">Default</option>
				<option value="created">Created</option>
			</select>
		</>
	)
}
export default Origin
