import { Link } from "react-router-dom";
import styles from "../styles/menu.module.scss";
import { useState, useEffect } from "react";
import About from "./About";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <button className={styles.aboutBtn} onClick={() => setOpen(true)}>
        About
      </button>
      {open ? (
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
          x
        </button>
      ) : null}
      <About open={open} />
      <Link to={"/dB2Hz.archive/album"} className={styles.albumLink}>
        Album
      </Link>
    </div>
  );
}

export default Menu;
