import { useContext, useEffect, useLayoutEffect } from "react";
import keyBoardEvent from "@/Events/keyBoardEvent";
import workWithFocus from "./workWithInput/workWithFocus";
import style from "./style.module.css";
import CalcContext from "@/Context/CalcContext";
import GeneralContext from "@/Context";

export default function CalculatorInput() {

  const { 
    setShouldUpdateHistory,
    setErrorMessage
  } = useContext(GeneralContext);
  
  const {
    inputValue, setInputValue,
    inputPosition, setInputPosition
  } = useContext(CalcContext);

  // useEffect(() => {
  //   console.log(inputValue)
  // }, [inputValue])

  useLayoutEffect(() => {
    workWithFocus(inputPosition, setInputPosition);
  }, [inputPosition, setInputPosition]);

  return (
    <input 
      name="calculatorInput"
      className={style.calcInput}
      type="text" 
      value={inputValue}
      onKeyDown={(e) => keyBoardEvent(e, { 
        inputValue, setInputValue, 
        setInputPosition, 
        setShouldUpdateHistory, 
        setErrorMessage
      })}
      onChange={(e) => {}}
    />
  )
}