import errorMsg from "./Errors/errorMsg";
import warning from "./Errors/warningMsg";
import extendedOperands from "./public/Operands/extended";
import extendedForCalc from "./public/Operands/extended/extendedForCalc";
import extendedOperandsArr from "./public/Operands/extended/extendedOperandsArr";
import extendedRenderOperands from "./public/Operands/extended/extendedRenderOperands";
import flags from "./system/regExp/flags";
import regExpStr from "./system/regExp/regExpStr";

export default interface Config {
  errors: {
    errorMsg: typeof errorMsg,
    warning: typeof warning,
  },
  extended: {
    extendedForCalc: typeof extendedForCalc,
    extendedOperands: typeof extendedOperands,
    extendedOperandsArr: typeof extendedOperandsArr,
    extendedRenderOperands: typeof extendedRenderOperands,
  },
  system: {
    regExpStr: typeof regExpStr,
    flags: typeof flags,
  },
}