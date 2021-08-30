import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Form from "./components/Form";

const App = () => {
	return (
		<div className="App">
			<h1 className="heading">Expense tracker</h1>
			<Form />
			<ul className="list">
				<ExpenseItem date="85-26-12" description="Guitar" amount="150" />
				<ExpenseItem
					date="17/06/95"
					description="JavaScript Course"
					amount="50"
				/>
				<ExpenseItem
					date="17/04/2021"
					description="Smart Phone"
					amount="300"
				/>
			</ul>
		</div>
	);
};

export default App;
