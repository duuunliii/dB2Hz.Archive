import PropTypes from "prop-types";
import styles from "../styles/detail.module.scss";

function Detail({ id, img1, img2, place, time, formula, open }) {
  return (
    <div className={open ? styles.detailOpen : styles.detailClose}>
      <div className={styles.modal}>
        <img src={img1} className={styles.img1}></img>
        <h1 className={styles.formula}>{formula}</h1>
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
  formula: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Detail;
