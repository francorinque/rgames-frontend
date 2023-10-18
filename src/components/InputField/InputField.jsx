const InputField = ({
	inputType,
	name,
	id,
	type,
	label,
	placeholder,
	error,
	onChange,
	onChangeSelect,
	value,
	children,
}) => {
	switch (inputType) {
		case 'textarea': {
			return (
				<div>
					<label htmlFor={id}>{label}</label>
					<textarea
						id={id}
						name={name}
						placeholder={placeholder}
						cols="30"
						rows="10"
						value={value}
						onChange={onChange}
					/>
					{error && <span>{error}</span>}
				</div>
			)
		}
		case 'input': {
			return (
				<div>
					<label htmlFor={id}>{label}</label>
					<input
						id={id}
						type={type}
						name={name}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
					/>
					{error && <span>{error}</span>}
				</div>
			)
		}

		case 'select': {
			return (
				<div>
					<label htmlFor={id}>{label}</label>
					<select
						id={id}
						name={name}
						onChange={onChangeSelect}
						value={value}
						multiple
					>
						{children}
					</select>
					{error && <span>{error}</span>}
				</div>
			)
		}
	}
}
export default InputField
