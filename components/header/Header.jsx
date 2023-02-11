import { useEffect } from "react";

import { useMediaQuery } from "react-responsive";
import { MobileHeader } from "./MobileHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import * as styles from "../../styles/Header.module.css";

export const Header = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const mobileMode = useMediaQuery({
    query: "(max-width:810px)",
  });
  if (mobileMode) {
    return <MobileHeader />;
  }

  return (
    <div className={styles.header}>
      <div>
        <div className={styles.headerBody}>
          <div
            data-aos="fade-right"
            data-aos-once={true}
            className={styles.logo}
          >
            <div className={styles.logoContainer}></div>
          </div>
          <div
            className={styles.title}
          >
            <div>
              <div className={styles.titleText}>
                <a>Մեր Մասին</a>
                <h1>Գայանե Գեղեցկության Սրահ</h1>
                <a>Ծառայություններ</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.headerDesign}>
        <div className={styles.colorElement}></div>
      </div>
    </div>
  );
};
