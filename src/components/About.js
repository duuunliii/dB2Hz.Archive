import PropTypes from "prop-types";
import styles from "../styles/about.module.scss";
import img from "../assets/atom.gif";

function About({ open }) {
  return (
    <div className={open ? `${styles.isActive} ${styles.close}` : styles.close}>
      <div className={styles.modal}>
        <h1 className={styles.title}>
          dB<span className={styles.atomNum}>2</span>Hz
        </h1>
        <p className={styles.paragraph}>
          dB2Hz는 소리가 구성하는 공간을 시각화하고, 여러 장소에서 기록한 공간
          이미지를 아카이빙하는 프로젝트입니다.
        </p>
        <p className={styles.paragraph}>
          공간에는 그곳에 존재하는 것들이 스며들고, 하나의 공간은 환경에 따라
          매번 새롭게 구성됩니다. 그 중 소리는 공간의 성질을 정의하고 이를
          구성하는 핵심 요소이자 공간에 대한 이미지를 형성하게 하는 기억
          요소로서 기능합니다.
        </p>
        <p className={styles.paragraph}>
          본 프로젝트는 작가 본인이 경험했던 공간별 소리를 시각화하기 위해
          공간을 물질로 정의하고 소리의 기본 구성 요소인 dB / Hz 를 화합물의
          물성을 결정하는 원소로 치환합니다. dB 원자와 Hz 원자로 구성된 분자
          이미지를 통해 소리가 형성하는 공간의 물성을 표현하고자 합니다.
        </p>
        <img
          src={img}
          alt="dB / Hz 원자 이미지"
          className={styles.atomImg}
        ></img>
      </div>
    </div>
  );
}

About.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default About;
