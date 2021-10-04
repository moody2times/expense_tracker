import styles from "../styles/Button.module.css";

export const Button = (props) => {
	return (
		<button
			className={styles.btn}
			style={props.style}
			type="submit"
			id={props.name}
			onClick={props.click}
		>
			{props.name}
		</button>
	);
};
