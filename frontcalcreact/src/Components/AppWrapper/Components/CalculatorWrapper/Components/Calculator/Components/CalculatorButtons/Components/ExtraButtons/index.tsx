import uiValues from "@/config/public/uiValues";
import SmartButtons from "../Buttons";

export default function ExtraButtons() {
  return (
    <div>
      <SmartButtons buttons={uiValues.extendedOperands} />
    </div>
  )
}