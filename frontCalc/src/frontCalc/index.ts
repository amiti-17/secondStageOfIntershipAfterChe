import numbers from "../config/system/constants/numbers";
import checkersInput from "../checkersInput";
import ResDataType from "./ResDataType";
import fetchData from "./fetchData";
import setResValue from "./setResValue";

export default async function calculate(data: string) {

  let isInputChecked;
  let calculatedData: ResDataType = [{result: numbers.zero.str}];

  isInputChecked = checkersInput(data);

  const reqBody = {
    exp: data,
  }

  if (isInputChecked) calculatedData = await fetchData(reqBody);

  setResValue(calculatedData);
}