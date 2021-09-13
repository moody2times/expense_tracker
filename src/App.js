import { React, useState, useEffect } from "react";
import ExpenseItem from "./components/ExpenseItem";
import Form from "./components/Form";
import Select from "./components/Select";
import { Button } from "./components/Button";
import inputRef from "./Context/inputContext";
import Card from "./components/Card";
import Chart from "./components/Chart";
import "./styles/App.css";

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

	// useEffect(() => {
	// 	const expenseChart = [
	// 		{ month: "jan", value: 0 },
	// 		{ month: "feb", value: 0 },
	// 		{ month: "mar", value: 0 },
	// 		{ month: "apr", value: 0 },
	// 		{ month: "may", value: 0 },
	// 		{ month: "jun", value: 0 },
	// 		{ month: "jul", value: 0 },
	// 		{ month: "aug", value: 0 },
	// 		{ month: "sep", value: 0 },
	// 		{ month: "oct", value: 0 },
	// 		{ month: "nov", value: 0 },
	// 		{ month: "dec", value: 0 },
	// 	];
	// 	data.map((d, i) => {
	// 		const exp = expenseChart[i];
	// 	});
	// }, [data]);

	return (
		<inputRef.Provider value={{ isPressed }}>
			<div className="App">
				<h1 className="heading">Expense tracker</h1>
				{isPressed ? (
					<Form submitData={handleData} />
				) : (
					<Button name="New" click={handleClick} />
				)}
				<Card>
					<Chart label="jan" value={280} max={800} />
				</Card>
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
		</inputRef.Provider>
	);
};

export default App;
