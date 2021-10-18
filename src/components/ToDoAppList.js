import { memo } from "react";
import ListItem from "./ItemList";
import styles from "../App.module.css";

function ToDoAppList({ items, setItems }) {
  const handleRemoveItem = (itemId) => {
    const itemsLeft = items.filter((item) => item.id !== itemId);
    setItems(itemsLeft);
  };

  return (
    <>
      {items.length > 0 ? (
        <ul className={styles.todoList}>
          {items.map((item) => (
            <ListItem item={item} handleRemoveItem={handleRemoveItem} />
          ))}
        </ul>
      ) : (
        <span></span>
      )}
    </>
  );
}

export default memo(ToDoAppList);
