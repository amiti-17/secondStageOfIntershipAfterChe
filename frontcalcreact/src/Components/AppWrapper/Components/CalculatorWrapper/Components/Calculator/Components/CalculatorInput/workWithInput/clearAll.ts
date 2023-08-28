import constants from "@/config/system/constants";
import numbers from "@/config/system/constants/numbers";

export default function clearAll( 
  {inputValue, setInputValue, setInputPosition }: {
    inputValue: string, 
    setInputValue: ((arg0: string | ((arg0: string) => string))=>void),
    setInputPosition: React.Dispatch<React.SetStateAction<number>>
  }
) {
  // console.log(myInput)
  setInputValue((inputValue) => constants.emptyStr.str);
  setInputPosition(numbers.zero.num);
  // (document.querySelector('input[type="text"]') as HTMLInputElement)?.focus();
}