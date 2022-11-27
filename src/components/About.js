import PropTypes from "prop-types";
import styles from "../styles/about.module.scss";

function About({ open }) {
  return (
    <div className={open ? styles.open : styles.close}>
      <div className={styles.modal}>
        <p>
          본 작품은 소리가 구성하는 공간의 물성을 시각화하는 프로젝트입니다.
        </p>
      </div>
    </div>
  );
}

About.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default About;
