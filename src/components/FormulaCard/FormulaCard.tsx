import { useState } from "react";
import { formatDateNowToMonthYear } from "../../services/utils";
import { PryFormula } from "../../types";
import styles from "./FormulaCard.module.scss";

export default function FormulaCard({
  name,
  value,
  result,
  createdAt,
}: PryFormula) {
  const [expandCard, setExpandCard] = useState<boolean>(false);

  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <span
          className={`${expandCard && styles.rotatedIcon}`}
          onClick={() => setExpandCard(!expandCard)}
        >
          {" "}
          {">"}
        </span>
        <p>{name}</p>
      </div>
      <div className={styles.resultBlock}>
        <p className={styles.result}>{result}</p>
        <span className={styles.formulaDate}>
          {formatDateNowToMonthYear(createdAt)}
        </span>
      </div>
      {expandCard && (
        <div className={styles.expandedBlock}>
          <p>{value}</p>
        </div>
      )}
    </div>
  );
}
