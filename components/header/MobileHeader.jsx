
import { useEffect } from "react";
import * as styles from "../../styles/MobileHeader.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const MobileHeader = () =>{
  
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.background}></div>
          <div className={styles.sections}>
            <div
              data-aos="fade-down"
              data-aos-once={true}
              className={styles.logo}
            >
              <div className={styles.logoContainer}></div>
            </div>
            <div data-aos="flip-down" className={styles.title}>
              <div className={styles.titleBox}>
                <h1>Գայանե Գեղեցկության Սրահ</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}