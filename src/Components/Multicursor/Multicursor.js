import styles from "./Multicursor.module.css";

const Multicursor = () => {
  return (
    <div className={styles.multiCursor}>
      <div className={`${styles.line} ${styles.line1}`}>
        <div className= {`${styles.widget} ${styles.widget1}`}>You</div>
      </div>
      <div className={`${styles.line} ${styles.line2}`}>
        <div className={`${styles.widget} ${styles.widget2}`}>Vivek</div>
      </div>
      <div className={`${styles.line} ${styles.line3}`}>
        <div className={`${styles.widget} ${styles.widget3}`}>Bob</div>
      </div>
      <div className={`${styles.line} ${styles.line4}`}>
        <div className={`${styles.widget} ${styles.widget4}`}></div>
      </div>
      <div className={`${styles.line} ${styles.line5}`}>
        <div className={`${styles.widget} ${styles.widget5}`}>Vivek</div>
      </div>
    </div>
  );
};

export default Multicursor;
