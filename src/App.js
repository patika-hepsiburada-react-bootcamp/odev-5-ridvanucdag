import { useState, useEffect } from "react";
import ToDoAppList from "./components/ToDoAppList";
import Footer from "./components/Footer";
import styles from "./App.module.css";
//id=0
let id = 0;

function App() {
  const [items, setItems] = useState([
    { id: id, value: "Yazılımı öğren", complated: false },
  ]);
  const [toDoItem, setToDoItem] = useState("");

  const handleGetItem = (e) => setToDoItem(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (toDoItem) {
        id++;
        setItems((prev) => [
          ...prev,
          { id: id, value: toDoItem, complated: false },
        ]);
      }
    }
  };

  useEffect(() => {
    setToDoItem("");
  }, [items]);

  return (
    <>
      <section className={styles.todoapp}>
        <header className={styles.header}>
          <h1>todosApp</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className={styles.newTodo}
              placeholder="Ne yapmak istiyorsun ?"
              value={toDoItem}
              onChange={handleGetItem}
              onKeyPress={handleKeyPress}
            />
          </form>
        </header>

        {/*This section should be hidden by default and shown when there are todos*/}
        <section className={styles.main}>
          <input className={styles.toggleAll} type={styles.checkbox} />
          <label>Mark all as complete</label>

          <>
            <ToDoAppList items={items} setItems={setItems} />
          </>
        </section>

        {/*This footer should hidden by default and shown when there are todos*/}
        <>
          <Footer items={items} />
        </>
      </section>

      <footer className={styles.info}>
        <h2>
          <a href="https://github.com/ridvanucdag">Rıdvan ÜÇDAĞ</a>
        </h2>
      </footer>
    </>
  );
}

export default App;
