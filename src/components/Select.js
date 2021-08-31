import { useState } from "react";
import "./Select.css";

const Select = () => {
	const [year, setYear] = useState("");

	const handleChange = (event) => {
		const newYear = event.target.value;
		setYear(newYear);
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
