import styles from "../styles/main.module.scss";
import mainImg from "../assets/img0.png";

function Main() {
  return (
    <div className={styles.main}>
      <h1 className={styles.t1}>d</h1>
      <h1 className={styles.t2}>B</h1>
      <h1 className={styles.t3}>2</h1>
      <h1 className={styles.t4}>H</h1>
      <h1 className={styles.t5}>z</h1>
      <img src={mainImg} className={styles.mainImg}></img>
      <p className={styles.paragraph}>가나다라마바사</p>
    </div>
  );
}

export default Main;
