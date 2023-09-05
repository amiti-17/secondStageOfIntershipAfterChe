import numbers from "@/config/system/constants/numbers";
import ResDataType from "../config/Types/ResDataType";
import fetchData from "@/Functions/fetchFunctions/fetchData";
import checkersInput from "@/Components/AppWrapper/Components/CalculatorWrapper/Components/Calculator/Components/CalculatorInput/checkersInput";
import CustomError from "@/config/Errors";
import errorMsg from "@/config/Errors/errorMsg";

export default async function calculate({
  inputValue, setInputValue, 
  setInputPosition, 
  setShouldUpdateHistory,
  setErrorMessage
}: {
  inputValue: string, 
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  setInputPosition: React.Dispatch<React.SetStateAction<number>>,
  setShouldUpdateHistory: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
}) {

  let isInputChecked;
  let calculatedDataOrErrorMsg: ResDataType | string = {result: numbers.zero.str};

  isInputChecked = checkersInput(inputValue);
  
  const reqBody = {
    exp: inputValue,
  }

  if (isInputChecked) calculatedDataOrErrorMsg = await fetchData(reqBody);

  console.warn(calculatedDataOrErrorMsg);
  // if (calculatedData.result === undefined) {
  //   setInputValue(numbers.zero.str);
  //   return;
  // }

  if (typeof calculatedDataOrErrorMsg === "string") {
    setErrorMessage(calculatedDataOrErrorMsg);
    setShouldUpdateHistory(true);
    setInputValue(numbers.zero.str);
    setInputPosition(numbers.zero.str.length);
    return
  }

  setShouldUpdateHistory(true);
  setInputValue(calculatedDataOrErrorMsg.result);
  setInputPosition(calculatedDataOrErrorMsg.result.length);
}