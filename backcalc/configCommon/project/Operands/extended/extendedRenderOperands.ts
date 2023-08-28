import extendedOperands from ".";
import CustomError from "../../../Errors";
import errorMsg from "../../../Errors/errorMsg";

const extendedRenderOperands = extendedOperands.map(elObj => Object.values(elObj).map(el => {
  
  if (el.display) {
    return el.display.value;
  }

  throw new CustomError(errorMsg.noElementFieldHere);
}).join());

export default extendedRenderOperands;