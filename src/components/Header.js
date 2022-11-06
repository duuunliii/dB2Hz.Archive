import styles from "../styles/header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <h3>Sound Photography by duuun</h3>
      <Link to={"/dB2Hz.archive/album"} className={styles.link}>
        Album
      </Link>
    </div>
  );
}

export default Header;
