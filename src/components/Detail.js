import PropTypes from "prop-types";
import styles from "../styles/detail.module.scss";

function Detail({ id, img1, img2, gif, place, date, time, dB, Hz, open }) {
  return (
    <div className={open ? `${styles.isActive} ${styles.close}` : styles.close}>
      <div className={styles.modal}>
        <img src={gif} className={styles.imgs}></img>
        <img src={img2} className={styles.imgs}></img>
        <h1 className={styles.formula}>
          dB<span className={styles.atomNum}>{dB}</span>Hz
          <span className={styles.atomNum}>{Hz}</span>
        </h1>
        <h2 className={styles.place}>{place}</h2>
        <h4 className={styles.date}>{date}</h4>
        <h4 className={styles.time}>{time}</h4>
      </div>
    </div>
  );
}

Detail.propTypes = {
  id: PropTypes.number.isRequired,
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  dB: PropTypes.number.isRequired,
  Hz: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Detail;
