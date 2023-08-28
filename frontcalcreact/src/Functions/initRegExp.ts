import regExp from "@/config/system/regExp";
import regExpStr from "@/config/system/regExp/regExpStr";

export default function initRegExp(
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>, 
  serverRegExpStr: typeof regExpStr, 
  localRegExp: typeof regExp
) {
  try {
    Object.keys(serverRegExpStr).forEach(regExpString => {
      localRegExp[regExpString] = new RegExp(serverRegExpStr[regExpString]);
    });
  } catch (error) {
    setErrorMessage(error instanceof Error ? error.message + ". some going wrong in writeDataObj()" : "some going wrong in initRegExp()");
    console.error(error instanceof Error ? error.message + ". some going wrong in writeDataObj()" : "some going wrong in initRegExp()");
  }
  
}