import * as styles from "./styles.module.css";


export const HeaderComponent =({header})=>{
    return (
        <div className = {styles.headerComponent}>
            <h2>{header}</h2>
        </div>
    )
}