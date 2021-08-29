// import { useState } from "react";
import "./Expense.css";

const ExpenseItem = (props) => {
	// const [amount, setAmount] = useState(props.amount);
	const locale = navigator.locale;

	const timeStamp = new Date();
	const month = timeStamp.toLocaleString(locale, { month: "long" });
	const year = timeStamp.toLocaleString(locale, { year: "numeric" });
	const date = timeStamp.toLocaleString(locale, { day: "numeric" });

	// const handleClick = () => {
	// 	setAmount(+amount + 1);
	// };

	return (
		<ul className="list__container">
			<li className="list__date">
				<span className="list__date--month">{month}</span>
				<span className="list__date--date">{date}</span>
				<span className="list__date--year">{year}</span>
			</li>
			<li className="list__description">{props.description}</li>
			<li className="list__amount">${props.amount}</li>
			{/* <button className="btn" onClick={handleClick}>
				Add Expense
			</button> */}
		</ul>
	);
};

export default ExpenseItem;
