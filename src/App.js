import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
	return (
		<div className="App">
			<h1 className="heading">Expense tracker</h1>
			<ExpenseItem date="2 days ago" description="Guitar" amount="$150" />
			<ExpenseItem description="JavaScript Course" amount="$50" />
			<ExpenseItem description="Smart Phone" amount="$300" />
		</div>
	);
};

export default App;
