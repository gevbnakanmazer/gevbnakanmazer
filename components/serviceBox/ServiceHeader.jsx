import * as styles from "./styles.module.css";

export const ServiceHeader = ({ headerText }) => {
  return (
    <div className = {styles.headerContainer}>
      <h2>{headerText}</h2>
    </div>
  );
};
