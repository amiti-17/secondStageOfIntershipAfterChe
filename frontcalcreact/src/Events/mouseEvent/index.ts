import myInput from "@/Components/AppWrapper/Components/CalculatorWrapper/Components/Calculator/Components/CalculatorInput/workWithInput";
import calcControlFunc from "../../config/public/calcControlFunc";

export default function mouseEvent(
  e: React.MouseEvent<HTMLInputElement, MouseEvent>, 
  { inputValue, setInputValue, setInputPosition, setShouldUpdateHistory }: {
    inputValue: string, 
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    setInputPosition: React.Dispatch<React.SetStateAction<number>>
    setShouldUpdateHistory: React.Dispatch<React.SetStateAction<boolean>>,
  }
) {
 
  console.log("trigger mouse event with button: " + (e.target as HTMLButtonElement).value);
  switch ((e.target as HTMLButtonElement).value) {
    case calcControlFunc.clearAll.display?.value:
      myInput.clearAll({ inputValue, setInputValue, setInputPosition });
      break;
    case calcControlFunc.clearOneSymbol.display?.value:
      myInput.clearOneSymbol({ inputValue, setInputValue, setInputPosition });
      break;
    case calcControlFunc.equal.display?.value:
      myInput.calculate({ inputValue, setInputValue, setInputPosition, setShouldUpdateHistory })
      break;
    default:
      myInput.addValue({ inputValue, setInputValue, setInputPosition }, (e.target as HTMLButtonElement).value)
      break;
  }
}