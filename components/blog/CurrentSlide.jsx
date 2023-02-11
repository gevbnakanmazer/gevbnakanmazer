import * as styles from "./style.module.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const CurrentSlide = ({ slide }) => {
  return (
    <div
      className={styles.currentSlide}
      style={{ backgroundImage: `url(${slide.img})` }}
    >
      <div className={styles.gradient}></div>
      <div className={styles.headerBox}>
        <h2 className={styles.header}>{slide.title}</h2>

        <p>{slide.shortContent.replace(/^(.{40}[^\s]*).*/, "$1")} ... </p>
      </div>
    </div>
  );
};  
