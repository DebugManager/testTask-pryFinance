import { useState } from "react";
import useStore from "../../store";

import { HandleClick } from "../../types";
import styles from "./CreateInput.module.scss";

export default function CreateFormula({ onClick }: HandleClick) {
  const [inputValue, setInputValue] = useState<string>("");
  const [name, setName] = useState<string>("");

  function submitInput() {
    try {
      useStore.getState().addInput(name, inputValue);
      onClick();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <span onClick={onClick} className={styles.closeIcon}>
          &times;
        </span>
        <h3>Create Your Own Slot</h3>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={styles.nameInput}
          placeholder="New Slot"
          required
        />

        <input
          type="text"
          value={inputValue}
          onChange={(e: any) => setInputValue(e.target.value)}
          className={styles.formulaInput}
          placeholder="ex.p. 500"
          required
        />

        <button onClick={submitInput} type="submit" className={styles.addBtn}>
          + Add
        </button>
      </div>
    </div>
  );
}
