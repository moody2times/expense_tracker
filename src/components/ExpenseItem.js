const ExpenseItem = (props) => {
	const timeStamp = new Date();

	return (
		<ul>
			<li>{timeStamp.toLocaleDateString()}</li>
			<li>{props.description}</li>
			<li>{props.amount}</li>
		</ul>
	);
};

export default ExpenseItem;
