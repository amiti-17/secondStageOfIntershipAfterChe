import ControlOperands from "./Components/ControlOperands";
import style from "./style.module.css";
import BasicButtons from "./Components/BasicButtons";

export default function MainButtons() {
  return (
    <div className={style.divWithAllBasicButtons}>
      <BasicButtons />
      <ControlOperands />
    </div>
  )
}