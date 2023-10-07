import MenuAppBar from "../../Components/Navbar/Navbar";
import CreateModal from "../../Components/CreateModal/CreateModal";
import styles from "./home.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axiosClient from "../../middleware/axios";
const Home = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const getData = async () => {
    axiosClient
      .get("http://localhost:8080/login")
      .then((res) => {
        if (res.status !== 401) {
          navigate("/home");
        } else {
          const data = res.json();
          console.log(data);
        }
      })
      .then((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.homepage}>
      <MenuAppBar />
      {modal && <CreateModal setModal={setModal} />}
      <div
        className={false ? `${styles.body}${styles.blur}` : `${styles.body}`}
      >
        <div className={styles.createRoom}>
          <div className={styles.createButton} onClick={() => setModal(true)}>
            Create <span className={styles.btnIcon}>+</span>
          </div>
          <div className={`${styles.joinInput} ${styles.gradiantAnimation}`}>
            <input
              className={styles.inputField}
              placeholder="Enter a code or link"
            />
          </div>
          <div className={styles.joinButton}>Join</div>
        </div>
      </div>

      {/* Second section */}

      <div className={styles.second_sec}>
        <p>Already Joined</p>
        <div className={styles.line}></div>
        <div className={styles.class_box}>
          <div className={styles.class_item}></div>
          {/* <div className={styles.class_item}></div>
            <div className={styles.class_item}></div>
            <div className={styles.class_item}></div>
            <div className={styles.class_item}></div>
            <div className={styles.class_item}></div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
