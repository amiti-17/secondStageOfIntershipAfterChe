import style from "./style.module.css";
import BasicControlButtons from "./Components/BasicControlButtons";
import BasicNumberButtons from "./Components/BasicNumberButtons";

export default function BasicButtons() {
  return (
    <div className={style.divForGroupingAdditionalAndNumbersButtons}>
      <BasicControlButtons />
      <BasicNumberButtons />
    </div>
  )
}