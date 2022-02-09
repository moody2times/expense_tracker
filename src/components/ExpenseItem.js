import React, { useCallback } from "react";
import "../styles/Expense.css";

const ExpenseItem = (props) => {
	const locale = navigator.locale;

	const timeStamp = new Date(props.date);
	const month = timeStamp.toLocaleString(locale, { month: "long" });
	const year = timeStamp.toLocaleString(locale, { year: "numeric" });
	const date = timeStamp.toLocaleString(locale, { day: "numeric" });

	//destructure the props object
	const { id, delete: deleteList } = props;

	const handleClick = useCallback(() => deleteList(id), [deleteList, id]);

	return (
		<li className="list__container" onClick={handleClick}>
			<div className="list__date">
				<span className="list__date--date">{date}</span>
				<span className="list__date--month">{month}</span>
				<span className="list__date--year">{year}</span>
			</div>
			<div className="list__description">{props.title}</div>
			<div className="list__amount">${props.amount}</div>
		</li>
	);
};

export default React.memo(ExpenseItem);
