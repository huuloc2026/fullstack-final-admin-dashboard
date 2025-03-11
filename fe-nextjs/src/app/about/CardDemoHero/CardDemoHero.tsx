import React from "react";
import styles from "./styles.module.css"; // Import CSS Module

const CardDemoHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.dot} />
        <div className={styles.card}>
          <div className={styles.ray} />
          <div className={styles.text}>750k</div>
          <div>Views</div>
          <div className={`${styles.line} ${styles.topl}`} />
          <div className={`${styles.line} ${styles.leftl}`} />
          <div className={`${styles.line} ${styles.bottoml}`} />
          <div className={`${styles.line} ${styles.rightl}`} />
        </div>
      </div>
    </div>
  );
};

export default CardDemoHero;
