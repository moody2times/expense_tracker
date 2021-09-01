import { useState } from "react";
import "./styles/App.css";
import ExpenseItem from "./components/ExpenseItem";
import Form from "./components/Form";
import Select from "./components/Select";

const App = () => {
	const [data, setData] = useState([
		{
			title: "Guitar",
			amount: 130,
			date: `December/26/2019`,
			key: "e1",
		},
		{
			title: "Smartphone",
			amount: 200,
			date: `June/17/2020`,
			key: "e2",
		},
		{
			title: "Toys",
			amount: 50,
			date: `April/17/2021`,
			key: "e3",
		},
	]);

	const [filter, setFilter] = useState([]);

	const filterExpense = (fil) => {
		console.log(typeof fil);
		const filtered = data.filter((d) => d.date.includes(fil));
		setFilter(filtered);
	};

	const handleData = (expense) => {
		setData((prevData) => [expense, ...prevData]);
	};

	return (
		<div className="App">
			<h1 className="heading">Expense tracker</h1>
			<Form formData={handleData} />
			<Select selected={filterExpense} />
			<ul className="list">
				{filter.map((f) => (
					<ExpenseItem
						title={f.title}
						amount={f.amount}
						date={f.date}
						key={f.key}
					/>
				))}
			</ul>
		</div>
	);
};

export default App;
