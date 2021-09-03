import styles from "../styles/Button.module.css";

export const Button = (props) => {
	return (
		<button
			className={styles.btn}
			type="submit"
			id={props.name}
			onClick={props.click}
		>
			{props.name}
		</button>
	);
};
