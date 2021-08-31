import { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Form from "./components/Form";
import Select from "./components/Select";

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
	const handleData = (expense) => {
		setData((prevData) => [expense, ...prevData]);
	};
	const randomNumber = () => Math.trunc(Math.random() + 1);

	return (
		<div className="App">
			<h1 className="heading">Expense tracker</h1>
			<Form formData={handleData} />
			<Select />
			<ul className="list">
				{data.map((d, i) => (
					<ExpenseItem
						title={d.title}
						amount={d.amount}
						date={d.date}
						key={i * randomNumber()}
					/>
				))}
			</ul>
		</div>
	);
};

export default App;
