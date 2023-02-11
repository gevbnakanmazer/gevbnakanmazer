import { useEffect } from "react";

import { AddressBox } from "./AddressBox";
import { PriceBox } from "./PriceBox";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import * as styles from "./styles.module.css";
import { useMediaQuery } from "react-responsive";
import { Button } from "./Button";

export const Slider1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const responsive1 = useMediaQuery({
    query: "(max-width:1173px)",
  });
  return (
    <div className={styles.container}>
      <div className={styles.infoLine} data-aos="fade-down">
        <AddressBox />
        <PriceBox />
      </div>
      <div className={styles.secondLine}>
        <div>
          <div className={styles.slider1header} data-aos="fade-right">
            <h1>Վաճառում ենք Բնական Մազեր</h1>
          </div>
          <div className={styles.phoneBox}>
            <p>091-22-22-79</p>
            <p>055-22-22-78</p>
          </div>
        </div>
        <div className={styles.imageBox}  data-aos="fade-left">
          <div className={styles.image}>
            <img src={img1.src} />
          </div>
          {!responsive1 ? (
            <div className={styles.image}> 
              <img src={img2.src} />
            </div>
          ) : null}
        </div>
      </div>
      <Button/>
    </div>
  );
};
