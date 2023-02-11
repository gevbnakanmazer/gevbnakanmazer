import React from "react";
import * as styles from "../styles/Footer.module.css";
import { SocialMedia } from "./utilsComponents/SocialMedia";

export const Footer = () => {

  const Iframe = (props)=>{
    return (
      <div>
        <iframe
          src={props.src}
          height={props.height}
          width={props.width}
        />
      </div>
    );
  }


  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.partOne}>
          <div className="menuFont  [&>li]:p-3">
            <ul>
              <li>Գլխավոր</li>
              <li>Ծառայություններ</li>
              <li>Բնական Մազեր</li>
              <li>Բլոգ</li>
            </ul>
          </div>
          <div className="[&>li]:p-3 mb-4 menuFont">
            <ul>
              <li>Մեր Մասին</li>
              <li>Կապ</li>
              <li>Քարտեզ</li>
            </ul>
          </div>
          <div className={styles.contact}>
            <div className="flex items-center fontVrcnagir">
              <div className="p-2">
                <p>+374</p>
              </div>
              <div>
                <p>91-22-22-79</p>
                <p>55-22-22-78</p>
              </div>
            </div>
            <SocialMedia />
          </div>
        </div>

        <div className={styles.partTwo}>
          <div className={styles.mapFrame}>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12189.023181493983!2d44.5016761!3d40.2033726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c3e43086dfb6d45!2sGayane%20Beauty%20Salon%20-%20Gev%20Bnakan%20Mazer!5e0!3m2!1shy!2s!4v1675113415823!5m2!1shy!2s"
              height="350"
              width="500"
            />
          </div>
        </div>
      </div>
      <div className = {styles.footerText}>
        Այլ կայքերում կամ հեռուստառադիոընթերցումներում մեջբերումներ անելիս <br></br>
        հղումը gayane-beuty-salon.am կայքին պարտադիր է:
      </div>
    </>
  );
};
