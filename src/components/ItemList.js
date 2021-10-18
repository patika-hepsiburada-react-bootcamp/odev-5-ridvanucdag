import { useState, memo } from "react";
import styles from "../App.module.css";

function ItemList({ item, handleRemoveItem }) {
  const [isComplate, setIsComplate] = useState({ isComplate: item.completed });
  const handleVisibility = () => {
    setIsComplate(!isComplate);
    item.complated = isComplate;
  };

  return (
    <li key={item.id} className={item.complated ? styles.completed : null}>
      <div className={styles.view}>
        <input
          className={
            item.complated
              ? `${styles.toggle} ${styles.toggleChecked}`
              : `${styles.toggle}`
          }
          onClick={() => handleVisibility()}
          type="checkbox"
        />
        <label>{item.value}</label>
        <button
          className={styles.destroy}
          onClick={() => handleRemoveItem(item.id)}
        ></button>
      </div>
    </li>
  );
}

export default memo(ItemList);
