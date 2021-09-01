import { useState } from "react";
import "../styles/Select.css";

const Select = (props) => {
	const [year, setYear] = useState("2019");

	const handleChange = (event) => {
		const newYear = event.target.value;
		setYear(newYear);
		props.selected(newYear);
	};

	return (
		<div className="select__controls">
			<label htmlFor="select">Filter:</label>
			<select
				className="select"
				id="select"
				onChange={handleChange}
				value={year}
			>
				<option defaultValue>2019</option>
				<option>2020</option>
				<option>2021</option>
			</select>
		</div>
	);
};

export default Select;
