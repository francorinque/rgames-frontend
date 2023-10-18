const ByName = ({ onName }) => {
	return (
		<>
			<h4>by name:</h4>
			<select onChange={onName} name="OrderByName">
				<option>Select a option</option>
				<option value="A-Z">A-Z</option>
				<option value="Z-A">Z-A</option>
			</select>
		</>
	)
}
export default ByName
