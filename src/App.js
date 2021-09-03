import { useState } from "react";
import "./styles/App.css";
import ExpenseItem from "./components/ExpenseItem";
import Form from "./components/Form";
import Select from "./components/Select";
import { Button } from "./components/Button";

const App = () => {
	const [data, setData] = useState([
		{
			title: "Guitar",
			amount: 130,
			date: `December/26/2019`,
		},
		{
			title: "Smartphone",
			amount: 200,
			date: `June/17/2020`,
		},
		{
			title: "Toys",
			amount: 50,
			date: `April/17/2021`,
		},
	]);
	const [filterData, setFilterData] = useState([]);
	const [isPressed, setIsPressed] = useState(false);
	const [noFilter, setNoFilter] = useState(true);

	const handleData = (expense) => {
		setData((prevData) => [expense, ...prevData]);
	};

	const filterYear = (year) => {
		setFilterData(data.filter((d) => d.date.includes(year)));
		setNoFilter(false);
	};

	let multiplier = 0;
	const randomNumber = () => {
		const number = Math.random() * multiplier;
		multiplier++;
		return number;
	};

	const handleClick = (event) => {
		setIsPressed(true);
	};

	const onClearFilter = () => {
		setNoFilter(true);
	};

	return (
		<div className="App">
			<h1 className="heading">Expense tracker</h1>
			{isPressed ? (
				<Form submitData={handleData} />
			) : (
				<Button name="Add" click={handleClick} />
			)}
			<Select filter={filterYear} clear={onClearFilter} />
			<ul className="list">
				{(noFilter &&
					data.map((d) => (
						<ExpenseItem
							title={d.title}
							amount={d.amount}
							date={d.date}
							key={randomNumber()}
						/>
					))) ||
					filterData.map((fd) => (
						<ExpenseItem
							title={fd.title}
							amount={fd.amount}
							date={fd.date}
							key={randomNumber()}
						/>
					))}
			</ul>
		</div>
	);
};

export default App;
