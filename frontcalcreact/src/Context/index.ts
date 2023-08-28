import React from "react";

export type GeneralContextType = {
  message: string,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  shouldUpdateHistory: boolean, 
  setShouldUpdateHistory: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
}

const generalContext: GeneralContextType = {
  message: "",
  setMessage: () => {},
  shouldUpdateHistory: false, 
  setShouldUpdateHistory: () => {},
  setErrorMessage: () => {},
};

const GeneralContext = React.createContext(generalContext);

export default GeneralContext;