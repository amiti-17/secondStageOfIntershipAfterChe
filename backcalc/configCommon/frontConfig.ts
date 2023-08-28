import CustomError from "./Errors";
import InitialOperandType from "./project/Operands/basic/InitialOperandType";

interface FrontConfigType {
  [prop: string]: string | 
    RegExp | 
    FrontConfigType | 
    typeof CustomError | 
    InitialOperandType | 
    InitialOperandType[] | 
    string[];
}

const frontConfig: FrontConfigType = {

};

export default frontConfig;