import React from "react";
import CalculatorInput from "./Components/CalculatorInput";
import CalcContext from "@/Context/CalcContext";
import CalculatorButtons from "./Components/CalculatorButtons";

const Calculator = () => {
  
  const [ inputPosition, setInputPosition ] = React.useState(0);
  const [ inputValue, setInputValue ] = React.useState("cos(2(1+(2*6)-3))");

  const contextValue = React.useMemo(() => ({
    inputValue, setInputValue, 
    inputPosition, setInputPosition
  }), [inputValue, inputPosition]);

  return (
    <CalcContext.Provider value={contextValue}>
      <CalculatorInput />
      <CalculatorButtons />
    </CalcContext.Provider>
  )
}

// ToDo: need component message, when fetch config - failed... 

export default Calculator;