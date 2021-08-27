import "./Expense.css";

const ExpenseItem = (props) => {
	const timeStamp = new Date();

	return (
		<ul className="list__container">
			<li>{timeStamp.toLocaleDateString()}</li>
			<li>{props.description}</li>
			<li>{props.amount}</li>
		</ul>
	);
};

export default ExpenseItem;
