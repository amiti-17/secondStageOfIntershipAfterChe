import useInitConfig from "@/Hooks/useInitConfig";
import { useState } from "react";
import MessageBox from "./Components/CalculatorWrapper/Components/Calculator/Components/MessageBox";
import GeneralContext from "@/Context";
import Loader from "./Components/CalculatorWrapper/Components/Calculator/Components/Loader";
import CalculatorWrapper from "./Components/CalculatorWrapper";
import HistoryWrapper from "./Components/HistoryWrapper";
 
export default function AppWrapper() {

  const [ isConfigReady, setIsConfigReady ] = useState(false);
  const [ shouldUpdateHistory, setShouldUpdateHistory ] = useState(false);
  const [ message, setMessage ] = useState("");
  const { errorMessage, setErrorMessage } = useInitConfig(setIsConfigReady);
  const generalContextValue = { 
    message, setMessage, 
    shouldUpdateHistory, setShouldUpdateHistory,
    setErrorMessage
  };


  if (errorMessage) {
    return <MessageBox message={errorMessage}/>
  }

  return isConfigReady ?
    <GeneralContext.Provider value={generalContextValue}>
      <CalculatorWrapper />
      <HistoryWrapper />
    </GeneralContext.Provider> :
    <Loader />
  
}