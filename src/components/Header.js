import styles from "../styles/header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        dB<span className={styles.atomNum}>2</span>Hz
      </h1>
      <h3>Sound Photography Project by Duuun</h3>
    </div>
  );
}

export default Header;
