import styles from "./Card.module.scss";
import trashCan from "../../../assets/images/trash-can.png";

type cardProps = {
  title: string;
  content: string;
  id: string;
  handleDelete: (id: string) => Promise<void>;
};

const Card = (props: cardProps) => {
  return (
    <div className={styles.card}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <img
        onClick={() => props.handleDelete(props.id)}
        src={trashCan}
        alt=""
        style={{cursor: "pointer", height: "1.2rem", width: "1.2rem", position: "absolute", top: 15, right: 10}}
      />
    </div>
  );
};

export default Card;
