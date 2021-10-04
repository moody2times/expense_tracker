import { React, useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import Form from "./components/Form";
import Select from "./components/Select";
import { Button } from "./components/Button";
import inputRef from "./Context/inputContext";
import Card from "./components/Card";
import ChartExpense from "./components/ChartExpense";
import "./styles/App.css";
import styles from "./styles/Button.module.css"

const App = () => {
	const [data, setData] = useState([
		{
			title: "Toys",
			amount: 50,
			date: `2021/april/17`,
			id: "e3",
		},
		{
			title: "Guitar",
			amount: 130,
			date: `2019/december/26`,
			id: "e1",
		},
		{
			title: "Smartphone",
			amount: 200,
			date: `2020/june/17`,
			id: "e2",
		},
	]);
	const [filterData, setFilterData] = useState([]);
	const [isPressed, setIsPressed] = useState(false);
	const [noFilter, setNoFilter] = useState(true);

	const formatDate = (date) => {
		const d = new Date(date);
		const locale = navigator.locale;
		const month = d
			.toLocaleDateString(locale, { month: "long" })
			.toLowerCase();
		const day = d.toLocaleDateString(locale, { day: "2-digit" });
		const year = d.toLocaleDateString(locale, { year: "numeric" });
		const formattedDate = `${year}/${month}/${day}`;

		return formattedDate;
	};

	const handleData = (expense) => {
		const newData = {
			title: expense.title,
			amount: +expense.amount,
			date: formatDate(expense.date),
			id: expense.id,
		};
		setData((prevData) => [newData, ...prevData]);
		setNoFilter(true);
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

	const onDelete = (id) => {
		setData((prevData) => prevData.filter((d) => d.id !== id));
	};

	const sortExpenses = () => {
		const sortArray = data.slice();
		const sorted = sortArray.sort((a, b) => a.date.localeCompare(b.date));
		setData(sorted);
	};

	const expense = data.map((d) => {
		return (
			<ExpenseItem
				title={d.title}
				amount={d.amount}
				date={d.date}
				id={d.id}
				key={d.id}
				delete={onDelete}
			/>
		);
	});

	const filteredExpense = filterData.map((d) => {
		return (
			<ExpenseItem
				title={d.title}
				amount={d.amount}
				date={d.date}
				id={d.id}
				key={d.id}
				delete={onDelete}
			/>
		);
	});

	return (
		<inputRef.Provider value={{ isPressed }}>
			<div className="App">
				<h1 className="heading">Expense tracker</h1>
				{isPressed ? (
					<Form submitData={handleData} />
				) : (
						<Button className={ styles.btn--new } name="Add Expense" click={handleClick} />
				)}
				{!noFilter && (
					<Card>
						<ChartExpense chartExp={filterData} />
					</Card>
				)}
				<Select
					filter={filterYear}
					clear={onClearFilter}
					onSort={sortExpenses}
				/>
				<ul className="list">{(noFilter && expense) || filteredExpense}</ul>
			</div>
		</inputRef.Provider>
	);
};

export default App;
