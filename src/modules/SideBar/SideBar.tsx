import { useState } from "react";
import AddButton from "../../UI/AddButton";
import InputCard from "../../components/InputCard";
import useStore from "../../store";
import styles from "./SideBar.module.scss";
import { createPortal } from "react-dom";
import CreateInput from "../../components/CreateInput";

export default function SideBar() {
  const inputs = useStore((state) => state.inputs);
  const [createModal, setCreateModal] = useState<boolean>(false);

  return (
    <aside className={styles.sideBar}>
      <div className={styles.head}>
        <h3>Inputs</h3>
        <AddButton onClick={() => setCreateModal(!createModal)} />
      </div>
      <div>
        {inputs.map((item) => (
          <InputCard key={item.id} {...item} />
        ))}
      </div>
      {createModal &&
        createPortal(
          <CreateInput onClick={() => setCreateModal(!createModal)} />,
          document.body
        )}
    </aside>
  );
}
