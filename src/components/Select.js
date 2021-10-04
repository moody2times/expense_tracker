import { useState } from "react";
import "../styles/Select.css";
import { Button } from "./Button";

const Select = (props) => {
	const [year, setYear] = useState([]);

	const setFilterYear = (filYear) => {
		props.filter(filYear);
	};

	const options = year.map((y) => <option key={Math.random()}>{y}</option>);

	const handleChange = (event) => {
		const newYear = event.target.value;
		setYear(newYear);
		setFilterYear(newYear);
	};

	const handleClick = () => {
		props.clear();
	};

	const handleSort = () => {
		props.onSort();
	};

	return (
		<div className="select__controls">
			<Button name="Clear Filter" click={handleClick} />
			<Button name="Sort" click={handleSort} />

			<label htmlFor="select">
				Filter:
				<select
					className="select"
					id="select"
					onChange={handleChange}
					value={year}
				>
					<option value="" defaultValue></option>
					{options}
				</select>
			</label>
		</div>
	);
};

export default Select;
