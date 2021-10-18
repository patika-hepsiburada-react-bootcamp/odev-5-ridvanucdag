import UncomplatedItems from "./UncomplatedItems";
import styles from "../App.module.css";
//items
function Footer({ items }) {
  return (
    <footer className={styles.footer}>
      {/*This should be "0 items left" by default*/}

      <UncomplatedItems items={items} />

      <ul className={styles.filters}>
        <li>
          <a className={styles.selected}>All</a>
        </li>
        <li>
          <a>Active</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </ul>

      <button className={styles.clearCompleted}>Clear completed</button>
    </footer>
  );
}

export default Footer;
