import { useContext, useLayoutEffect } from "react";
import mouseEvent from "@/Events/mouseEvent";
import workWithFocus from "../../../../../CalculatorInput/workWithInput/workWithFocus";
import style from "./styel.module.css";
import CalcContext from "@/Context/CalcContext";
import GeneralContext from "@/Context";

export default function Button(
  {
    displayValue,
  }: {
    displayValue: string, 
    key: number,
  }) {

  const { shouldUpdateHistory, setShouldUpdateHistory } = useContext(GeneralContext);
    
  const { 
    inputValue, setInputValue, 
    inputPosition, setInputPosition 
  } = useContext(CalcContext);

  useLayoutEffect(() => {
    workWithFocus(inputPosition, setInputPosition);
  }, [inputPosition, setInputPosition]);

  return (
    <input 
      type="button" 
      defaultValue={displayValue} 
      onClick={(e) => mouseEvent(e, {inputValue, setInputValue, setInputPosition, setShouldUpdateHistory})}
      className={style.buttons}
    />
  )

}