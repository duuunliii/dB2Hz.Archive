import styles from "../styles/main.module.scss";
import mainImg from "../assets/img0.gif";
import Menu from "./Menu";
import Data from "../Data";

function Main() {
  let num = Math.floor(Math.random() * Data.length);

  return (
    <div className={styles.main}>
      <img src={Data[num].gif} className={styles.mainImg}></img>
      <h3 className={styles.formula}>
        dB<span className={styles.atomNum}>{Data[num].dB}</span>Hz
        <span className={styles.atomNum}>{Data[num].Hz}</span>
      </h3>
      <h3 className={styles.place}>{Data[num].place}</h3>
    </div>
  );
}

export default Main;
