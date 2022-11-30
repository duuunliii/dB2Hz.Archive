import { Link } from "react-router-dom";
import styles from "../styles/menu.module.scss";
import { useState } from "react";
import About from "./About";
import closeBtnImg from "../assets/closeBtn.png";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <button className={styles.aboutBtn} onClick={() => setOpen(true)}>
        About
      </button>
      {open ? (
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
          <img src={closeBtnImg}></img>
        </button>
      ) : null}
      <About open={open} />
      {/* <button className={styles.aboutBtn} onClick={() => setOpen(true)}>
        Detail
      </button> */}
      <Link to={"/dB2Hz.archive/album"} className={styles.albumLink}>
        Album
      </Link>
    </div>
  );
}

export default Menu;
