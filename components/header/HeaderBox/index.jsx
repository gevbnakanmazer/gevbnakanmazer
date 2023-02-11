import { useEffect } from "react";
import * as styles from "./style.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const HeaderBox = ({ headerTitle }) => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className={styles.HeaderBoxs}>
      <div className={styles.headerTitle}>
        <div data-aos="zoom-in" data-aos-once={true} className={styles.title}>
          <h1>{headerTitle}</h1>
        </div>
      </div>
    </div>
  );
};
