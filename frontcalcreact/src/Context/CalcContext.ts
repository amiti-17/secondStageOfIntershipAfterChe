import React from "react";

export type CalcContextType = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  inputPosition: number
  setInputPosition: React.Dispatch<React.SetStateAction<number>>
}

const calcContext: CalcContextType = {
  inputValue: "", 
  setInputValue: () => {},
  inputPosition: 0,
  setInputPosition: () => {},
};

const CalcContext = React.createContext(calcContext);

export default CalcContext;