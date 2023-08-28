import myInput from "@/Components/AppWrapper/Components/CalculatorWrapper/Components/Calculator/Components/CalculatorInput/workWithInput";
import calcControlFunc from "../../config/public/calcControlFunc";
import regExp from "../../config/system/regExp";

export default function keyBoardEvent(
  e: React.KeyboardEvent<HTMLInputElement>, 
  { inputValue, setInputValue, setInputPosition, setShouldUpdateHistory }: {
    inputValue: string, 
    setInputValue: React.Dispatch<React.SetStateAction<string>>, 
    setInputPosition: React.Dispatch<React.SetStateAction<number>>,
    setShouldUpdateHistory: React.Dispatch<React.SetStateAction<boolean>>,
  }
) {
  
  if (regExp.forbiddenKeys.test(e.key)) return;
  
  console.log(`trigger keyboard event with button: ${e.key }`);

  switch (e.key) {
    case calcControlFunc.equal.keyOnKeyboard:
      e.preventDefault();
      myInput.calculate({ inputValue, setInputValue, setInputPosition, setShouldUpdateHistory });
      break;
    case calcControlFunc.clearAll.keyOnKeyboard:
      e.preventDefault();
      myInput.clearAll({ inputValue, setInputValue, setInputPosition });
      break;
    case calcControlFunc.clearOneSymbol.keyOnKeyboard:
      e.preventDefault();
      myInput.clearOneSymbol({ inputValue, setInputValue, setInputPosition });
      break;
    // case "shift" | "control" | "alt" | "capsLock":
    //   break;
    default:
      myInput.addValue({ inputValue, setInputValue, setInputPosition }, e.key);
      e.preventDefault()
      // setInputValue((e.target as HTMLInputElement).value);
  }

  
}