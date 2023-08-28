import uiValues from "@/config/public/uiValues";
import SmartButtons from "../../../../../Buttons";

export default function BasicControlButtons() {
  return (
    <div>
      <SmartButtons buttons={uiValues.inputControlButtons} />
    </div>
  )
}