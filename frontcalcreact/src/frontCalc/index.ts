import numbers from "@/config/system/constants/numbers";
import ResDataType from "./ResDataType";
import fetchData from "@/Functions/fetchFunctions/fetchData";
import checkersInput from "@/Components/AppWrapper/Components/CalculatorWrapper/Components/Calculator/Components/CalculatorInput/checkersInput";

export default async function calculate({inputValue, setInputValue, setInputPosition, setShouldUpdateHistory}: {
  inputValue: string, 
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  setInputPosition: React.Dispatch<React.SetStateAction<number>>,
  setShouldUpdateHistory: React.Dispatch<React.SetStateAction<boolean>>,
}) {

  let isInputChecked;
  let calculatedData: ResDataType = {result: numbers.zero.str};

  isInputChecked = checkersInput(inputValue);
  
  const reqBody = {
    exp: inputValue,
  }

  if (isInputChecked) calculatedData = await fetchData(reqBody);

  console.warn(calculatedData);
  if (calculatedData.calc === undefined) {
    setInputValue(numbers.zero.str);
    return;
  }

  setShouldUpdateHistory(true);
  setInputValue(calculatedData.result);
  setInputPosition(calculatedData.result.length);
}