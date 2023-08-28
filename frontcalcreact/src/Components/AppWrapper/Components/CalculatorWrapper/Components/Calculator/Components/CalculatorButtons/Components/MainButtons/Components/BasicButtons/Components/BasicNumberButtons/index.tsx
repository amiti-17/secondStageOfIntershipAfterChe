import uiValues from "@/config/public/uiValues";
import styles from "./style.module.css";
import SmartButtons from "../../../../../Buttons";

export default function BasicNumberButtons() {
  return (
    <div className={styles.divWithNumbersButtons}>
      <SmartButtons buttons={uiValues.mainNumberButtons}/>
    </div>
  )
}