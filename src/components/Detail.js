import PropTypes from "prop-types";
import styles from "../styles/detail.module.scss";

function Detail({ id, img1, img2, place, time, dB, Hz, open }) {
  return (
    <div className={open ? styles.open : styles.close}>
      <div className={styles.modal}>
        <img src={img1} className={styles.img1}></img>
        <h1 className={styles.formula}>
          dB{dB}Hz{Hz}
        </h1>
        <h2 className={styles.place}>{place}</h2>
        <h4 className={styles.time}>{time}</h4>
      </div>
    </div>
  );
}

Detail.propTypes = {
  id: PropTypes.number.isRequired,
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  dB: PropTypes.number.isRequired,
  Hz: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Detail;
