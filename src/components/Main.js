import styles from "../styles/main.module.scss";
import mainImg from "../assets/img0.gif";
import Menu from "./Menu";

function Main() {
  return (
    <div className={styles.main}>
      <h1 className={styles.t1}>d</h1>
      <h1 className={styles.t2}>
        B<span className={styles.t3}>2</span>
      </h1>
      <h1 className={styles.t4}>H</h1>
      <h1 className={styles.t5}>z</h1>
      <div className={styles.mainImg}></div>
    </div>
  );
}

export default Main;
