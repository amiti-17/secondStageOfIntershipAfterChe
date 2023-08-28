import uiValues from "@/config/public/uiValues";
import styles from "./style.module.css";
import SmartButtons from "../../../Buttons";


export default function ConrtolOperands() {
  return (
    <div className={styles.divWithKeyControlButtons}>
      <SmartButtons buttons={uiValues.keyControlButtons}/>
    </div>
  )
}