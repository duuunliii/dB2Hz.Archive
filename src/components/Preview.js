import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "../styles/preview.module.scss";
import Detail from "./Detail";
import Data from "../Data";

function Preview({ id, img1, img2, place, date, time, dB, Hz }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className={styles.preview} onClick={() => setOpen(true)}>
        <img src={img1} alt={place}></img>
        <h1>📍 {place}</h1>
        <h3>
          dB<span className={styles.atomNum}>{dB}</span>Hz
          <span className={styles.atomNum}>{Hz}</span>
        </h3>
      </button>

      {open ? (
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
          x
        </button>
      ) : null}

      <Detail
        key={id}
        id={id}
        img1={img1}
        img2={img2}
        place={place}
        date={date}
        time={time}
        dB={dB}
        Hz={Hz}
        open={open}
      />
    </div>
  );
}

Preview.propTypes = {
  id: PropTypes.number.isRequired,
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  dB: PropTypes.number.isRequired,
  Hz: PropTypes.number.isRequired,
};

export default Preview;
