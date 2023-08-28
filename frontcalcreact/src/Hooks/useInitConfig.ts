import { useEffect, useState } from "react";
import fetchConfig from "@/Functions/fetchFunctions/fetchConfig";
import writeDataObj from "@/Functions/fetchFunctions/writeDataObj";
import errorMsg from "@/config/Errors/errorMsg";
import warning from "@/config/Errors/warningMsg";
import extendedForCalc from "@/config/public/Operands/extended/extendedForCalc";
import extendedOperands from "@/config/public/Operands/extended";
import extendedOperandsArr from "@/config/public/Operands/extended/extendedOperandsArr";
import extendedRenderOperands from "@/config/public/Operands/extended/extendedRenderOperands";
import regExpStr from "@/config/system/regExp/regExpStr";
import flags from "@/config/system/regExp/flags";
import regExp from "@/config/system/regExp";
import initRegExp from "@/Functions/initRegExp";

export default function useInitConfig(setIsConfigReady: React.Dispatch<React.SetStateAction<boolean>>) {

  // const [ isConfigReady, setIsConfigReady ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');
  
  
    try {
      useEffect( () => {
      fetchWriteConfig();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "some in useInitConfig()");
      console.error(error instanceof Error ? error.message : "some in useInitConfig()");
    }
  const fetchWriteConfig = async () => {
    
    const data = await fetchConfig(setErrorMessage);
    

    // if ( !data.system.flags.global )
    try {
      writeDataObj(setErrorMessage, data.errors.errorMsg, errorMsg);
      writeDataObj(setErrorMessage, data.errors.warningMsg, warning);
      writeDataObj(setErrorMessage, data.project.operands.extended.extendedForCalc, extendedForCalc);
      writeDataObj(setErrorMessage, data.project.operands.extended.extendedOperands, extendedOperands);
      writeDataObj(setErrorMessage, data.project.operands.extended.extendedOperandsArr, extendedOperandsArr);
      writeDataObj(setErrorMessage, data.project.operands.extended.extendedRenderOperands, extendedRenderOperands);
      writeDataObj(setErrorMessage, data.system.flags, flags);
      writeDataObj(setErrorMessage, data.system.regExpStr, regExpStr);
      initRegExp(setErrorMessage, data.system.regExpStr, regExp);
    } catch (error) {
      setErrorMessage(error instanceof Error ? 
        error.message + ". some going wrong in writeDataObj()" : 
        "some going wrong in fetchWriteConfig()")
      console.error(error instanceof Error ? 
        error.message + ". some going wrong in writeDataObj()" : 
        "some going wrong in fetchWriteConfig()");
    }

    if (flags.global) setIsConfigReady(true);
  }

  return {errorMessage, setErrorMessage };
}
