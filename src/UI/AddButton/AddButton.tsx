import styles from "./AddButton.module.scss";

interface AddButtonProps {
  onClick: () => void;
}

export default function AddButton({ onClick }: AddButtonProps) {
  return (
    <button onClick={onClick} className={styles.btn}>
      +
    </button>
  );
}
