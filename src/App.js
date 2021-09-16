import { React, useState } from "react";
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
			date: `december/26/2019`,
			id: "e1",
		},
		{
			title: "Smartphone",
			amount: 200,
			date: `june/17/2020`,
			id: "e2",
		},
		{
			title: "Toys",
			amount: 50,
			date: `april/17/2021`,
			id: "e3",
		},
	]);
	const [filterData, setFilterData] = useState([]);
	const [isPressed, setIsPressed] = useState(false);
	const [noFilter, setNoFilter] = useState(true);

	const formatDate = (date) => {
		const d = new Date(date);
		const locale = navigator.locale;
		const month = d.toLocaleDateString(locale, { month: "long" });
		const day = d.toLocaleDateString(locale, { day: "2-digit" });
		const year = d.toLocaleDateString(locale, { year: "numeric" });
		const formattedDate = `${month}/${day}/${year}`;

		return formattedDate;
	};

	const handleData = (expense) => {
		const newData = {
			title: expense.title,
			amount: expense.amount,
			date: formatDate(expense.date),
			id: expense.id,
		};
		setData((prevData) => [newData, ...prevData]);
	};

	const filterYear = (year) => {
		const filterExpenses = data.filter((d) => d.date.includes(year));
		setFilterData(filterExpenses);
		setNoFilter(false);
	};

	const handleClick = () => {
		setIsPressed(true);
	};

	const onClearFilter = () => {
		setNoFilter(true);
	};

	const expense = data.map((d) => {
		return (
			<ExpenseItem
				title={d.title}
				amount={d.amount}
				date={d.date}
				key={d.id}
			/>
		);
	});

	const filteredExpense = filterData.map((d) => {
		return (
			<ExpenseItem
				title={d.title}
				amount={d.amount}
				date={d.date}
				key={d.id}
			/>
		);
	});

	const chartData = [
		{ month: "jan", value: 0 },
		{ month: "feb", value: 0 },
		{ month: "mar", value: 0 },
		{ month: "apr", value: 0 },
		{ month: "may", value: 0 },
		{ month: "jun", value: 0 },
		{ month: "jul", value: 0 },
		{ month: "aug", value: 0 },
		{ month: "sep", value: 0 },
		{ month: "oct", value: 0 },
		{ month: "nov", value: 0 },
		{ month: "dec", value: 0 },
	];

	for (const c of chartData) {
		filterData.forEach((item) => {
			if (item.date.includes(c.month)) {
				console.log(item);
				c.value = item.amount;
			}
		});
	}

	console.log(chartData);

	const maxData = chartData.map((item) => item.value);
	const maxValue = Math.max(...maxData);

	return (
		<inputRef.Provider value={{ isPressed }}>
			<div className="App">
				<h1 className="heading">Expense tracker</h1>
				{isPressed ? (
					<Form submitData={handleData} />
				) : (
					<Button name="New" click={handleClick} />
				)}
				{!noFilter && (
					<Card>
						{chartData.map((c) => (
							<Chart
								label={c.month}
								value={c.value}
								key={c.month}
								max={maxValue}
							/>
						))}
					</Card>
				)}
				<Select filter={filterYear} clear={onClearFilter} />
				<ul className="list">{(noFilter && expense) || filteredExpense}</ul>
			</div>
		</inputRef.Provider>
	);
};

export default App;
