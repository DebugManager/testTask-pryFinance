import { PryInput } from "../../types";
import styles from "./InputCard.module.scss";

export default function InputCard({ name, value }: PryInput) {


  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <p>{name}</p>
      </div>
      <div className={styles.valueBlock}>
        <p>{value}</p>
      </div>
    </div>
  );
}
