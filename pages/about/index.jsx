import { HeaderBox } from "../../components/header/HeaderBox";
import * as styles from "./style.module.css";

export const About = () => {
  return (
    <>
      <HeaderBox headerTitle="Մեր Մասին" />
      <div className={styles.aboutcontainer}>
        <div className={styles.aboutPart1}></div>
        <div className={styles.aboutPart2}>
          <div className={styles.part2Content}>
            <p>
              Բարի գալուստ մեր գեղեցկության սրահի պաշտոնական էջ։ Գայանե
              գեղեցկության սրահ-ը ներկայացնում է ոլորտում հայտնի Գևորգ Սադոյանը,
              ով իր GEV ապրանքանիշով արդեն մոտ 10 տարի զբաղվում է բնական մազերի
              առք ու վաճառով:
            </p>
          </div>
        </div>
      </div>
      <div className={styles.aboutcontainer}>
        <div className={`${styles.aboutPart2}`}>
          <div className={styles.part2Content}>
            <p>
              Մազերի խնամքը՝ արվեստ է: Ոճային կտրվածք, առողջ տեսք, մազերի փայլ և
              ճիշտ ընտրված գույն: Մեր սրահ-ստուդիան առաջարկում է ոճաբանի և
              վարպետի ծառայություններ, որոնք կստեղծեն կրեատիվ, անսովոր և
              ամենաժամանակակից սանրվածքներ: 
            </p>
          </div>
        </div>
        <div className={`${styles.aboutPart1} ${styles.aboutPart3}`}></div>
      </div>
    </>
  );
};
export default About;
