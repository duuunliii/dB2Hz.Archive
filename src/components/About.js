import PropTypes from "prop-types";
import styles from "../styles/about.module.scss";
import img from "../assets/dBHz.png";

function About({ open }) {
  return (
    <div className={open ? styles.open : styles.close}>
      <div className={styles.modal}>
        <h1 className={styles.title}>
          dB<span>2</span>Hz
        </h1>
        <p className={styles.paragraph}>
          공간에는 그곳에 존재하는 것들이 스며들고, 하나의 공간은 환경에 따라
          매번 새롭게 구성된다. 다양한 환경적 요소들 중 <strong>소리</strong>는
          공간의 성질을 정의하고 이를 구성하는 핵심 요소, 공간에 대한 이미지를
          형성하게 하는 기억 요소로서 기능하기 때문에 동일한 공간은 소리로 인해
          수천가지의 이미지로 기억될 수 있다.
        </p>
        <img
          src={img}
          alt="dB / Hz 원자 이미지"
          className={styles.atomImg}
        ></img>
        <p className={styles.paragraph}>
          따라서 본 프로젝트에서는 작가 본인이 경험했던 공간별 소리를 시각화하기
          위해 공간을 물질로 정의하고 소리의 기본 구성 요소인 dB / Hz 를
          화합물의 물성을 결정하는 원소로 치환한다. 각 공간별로 소리 원자들이
          구성하는 분자 구조를 이미지로 기록했고, 이를 통해 공간의 청각적 특성을
          파악할 수 있다.
        </p>
      </div>
    </div>
  );
}

About.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default About;
