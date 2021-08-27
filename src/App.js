import ExpenseItem from "./components/ExpenseItem";

const App = () => {
	return (
		<div>
			<h1>Expense tracker</h1>
			<ExpenseItem date="2 days ago" description="Guitar" amount="$150" />
			<ExpenseItem description="Javascript Course" amount="$50" />
		</div>
	);
};

export default App;
