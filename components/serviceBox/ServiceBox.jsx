import { useEffect } from "react";
import * as styles from "./styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ServiceHeader } from "./ServiceHeader";

export const ServiceBox = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <div className="title">
        <h2 className="header2">Ծառայություններ</h2>
      </div>
      <div className={styles.serviceContainer}>
        <div
          className={`${styles.service} ${styles.firstBackground}`}
          data-aos="fade-right"
        >
          <ServiceHeader headerText={"Վարսահարդարում"} />
        </div>
        <div
          className={`${styles.service} ${styles.secondBackground}`}
          data-aos="fade-down"
        >
          <ServiceHeader headerText={"Մատնահարդարում"} />
        </div>
        <div
          className={`${styles.service} ${styles.firstBackground}`}
          data-aos="fade-left"
        >
          <ServiceHeader headerText={"Դիմահարդարում"} />
        </div>
      </div>
    </div>
  );
};
