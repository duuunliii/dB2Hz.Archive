import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Preview from "../components/Preview";
import Data from "../Data";
import styles from "../styles/album.module.scss";

function Album() {
  const [dataList, setData] = useState([]);

  const getData = () => {
    setData(Data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <Link to={"/dB2Hz.archive/"} className={styles.link}>
          Home
        </Link>
      </div>

      <div className={styles.album}>
        {dataList.map((data) => (
          <Preview
            key={data.id}
            id={data.id}
            img1={data.img1}
            img2={data.img2}
            gif={data.gif}
            place={data.place}
            date={data.date}
            time={data.time}
            dB={data.dB}
            Hz={data.Hz}
          />
        ))}
      </div>
    </div>
  );
}

export default Album;
