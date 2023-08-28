import cssConstants from "@/config/system/constants/uiConstants/cssConstants";
import MainButtons from "./Components/MainButtons";
import ExtraButtons from "./Components/ExtraButtons";

export default function CalculatorButtons() {

  return (
    <div className={cssConstants.divWithAllButtons}>
      <MainButtons />
      <ExtraButtons />
    </div>
  )
}