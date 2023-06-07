import styles from "./Card.module.scss";

type cardProps = {
  title: string;
  content: string;
};

const Card = (props: cardProps) => {
  return (
    <div className={styles.card}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
