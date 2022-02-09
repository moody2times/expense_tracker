import { useState } from "react";
import "../styles/Select.css";
import { Button } from "./Button";
import { uniqIdGenerator } from "../helper/uniqIdGenerator";

const years = [2019, 2020, 2021];

const Select = (props) => {
	const [year, setYear] = useState("");

	//handler to filter by year
	const setFilterYear = (filYear) => {
		props.filter(filYear);
	};

	const options = years.map((y) => <option key={uniqIdGenerator()}>{y}</option>);

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
