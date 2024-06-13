import styles from "./FunctionSection.module.scss";

import useStore from "../../store";
import FormulaCard from "../../components/FormulaCard";
import AddButton from "../../UI/AddButton";
import { useState } from "react";
import { createPortal } from "react-dom";
import CreateFormula from "../../components/CreateFormula";

const FunctionsSection = () => {
  const formulas = useStore((state) => state.formulas);

  const [createModal, setCreateModal] = useState<boolean>(false);

  const toggleCreateModal = () => {
 
    setCreateModal(!createModal);
  };

  return (
    <main className={styles.mainBody}>
      <div className={styles.bodyHead}>
        <h3>Formulas</h3>
        <AddButton onClick={toggleCreateModal} />
      </div>

      <div>
        {formulas.map((formula) => (
          <FormulaCard key={formula.id} {...formula} />
        ))}
      </div>
      {createModal &&
        createPortal(
          <CreateFormula onClick={toggleCreateModal} />,
          document.body
        )}
    </main>
  );
};

export default FunctionsSection;
