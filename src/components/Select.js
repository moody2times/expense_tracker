import { useState } from "react";
import "../styles/Select.css";
import { Button } from "./Button";

const Select = (props) => {
	const [year, setYear] = useState("2019");

	const setFilterYear = (filYear) => {
		props.filter(filYear);
	};

	const handleChange = (event) => {
		const newYear = event.target.value;
		setYear(newYear);
		setFilterYear(newYear);
	};

	const handleClick = () => {
		props.clear();
	};

	return (
		<div className="select__controls">
			<Button name="Clear Filter" click={handleClick} />

			<label htmlFor="select">
				Filter:
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
			</label>
		</div>
	);
};

export default Select;
