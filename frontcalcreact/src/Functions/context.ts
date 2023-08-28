import Config from "@/config";
import React from "react";

export type ContextType = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  inputPosition: number
  setInputPosition: React.Dispatch<React.SetStateAction<number>>
  // isConfigReady: boolean
  // config: Config | undefined
  errorMessage: string, 
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

// let Context: any;

// function setContext({inputValue, setInputValue}: ContextType) {
//   Context = React.createContext({inputValue, setInputValue});
// }

const context: ContextType = {
  inputValue: "", 
  setInputValue: () => {},
  inputPosition: 0,
  setInputPosition: () => {},
  // isConfigReady: false,
  // config: undefined,
  errorMessage: "",
  setErrorMessage: () => {},
};

const Context = React.createContext(context);

// const myContext = { Context, setContext}

// export default myContext;

export default Context;