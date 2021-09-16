import styles from "../styles/Card.module.css";

const Card = (props) => {
	console.log("rerendered");

	return <div className={styles.card}>{props.children}</div>;
};

export default Card;
