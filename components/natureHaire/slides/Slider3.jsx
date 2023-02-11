import img1 from "./images/longH3.jpg";
import img2 from "./images/longH4.jpg";
import { useMediaQuery } from "react-responsive";
import { HeaderComponent } from "./HeaderComponent";

import * as styles from "./styles.module.css";
import { AddressBox } from "./AddressBox";
import { Button } from "./Button";

export const Slider3 = () => {
  const responsive1 = useMediaQuery({
    query: "(max-width:874px)",
  });
  return (
    <div className={styles.container}>
        <div className = {styles.addresPart}>
            <AddressBox/>
        </div>
      <div className={styles.slider2Container}>
        <div className={styles.imagePart1}>
          <img src={img1.src} />
        </div>
        {!responsive1 ? (
          <div className={styles.imagePart2}>
            <img src={img2.src} />
          </div>
        ) : null}
      </div>
      <div className={styles.headerPart}>
        <HeaderComponent header="Բնական Մազերի Երկարացում" />
      </div>
      <Button/>
    </div>
  );
};
