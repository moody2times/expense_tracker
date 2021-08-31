import { useState } from "react";
import "./Form.css";

const Form = (props) => {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const handleTitleChange = (event) => {
		const newTitle = event.target.value;
		setTitle(newTitle);
	};

	const handleAmountChange = (event) => {
		const newAmount = event.target.value;
		setAmount(newAmount);
	};

	const handleDateChange = (event) => {
		const newDate = new Date(event.target.value);
		setDate(newDate);
	};

	const resetForm = () => {
		setTitle("");
		setAmount("");
		setDate("");
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const expenseData = {
			title,
			amount,
			date,
		};
		resetForm();
		props.formData(expenseData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form__controls">
				<label htmlFor="#title" className="form__label">
					Title:
				</label>
				<input
					type="text"
					className="form__input"
					id="title"
					placeholder="title"
					onChange={handleTitleChange}
					value={title}
				/>
			</div>
			<div className="form__controls">
				<label htmlFor="#amount" className="form__label">
					Amount:
				</label>
				<input
					type="number"
					min="1"
					step="0.01"
					className="form__input"
					id="amount"
					placeholder="amount"
					onChange={handleAmountChange}
					value={amount}
				/>
			</div>
			<div className="form__controls">
				<label htmlFor="#date" className="form__label">
					Date:
				</label>
				<input
					type="date"
					className="form__input"
					id="date"
					onChange={handleDateChange}
					value={date}
				/>
			</div>
			<button className="btn" type="submit">
				Add
			</button>
			<button className="btn" type="submit">
				Delete
			</button>
		</form>
	);
};

export default Form;
