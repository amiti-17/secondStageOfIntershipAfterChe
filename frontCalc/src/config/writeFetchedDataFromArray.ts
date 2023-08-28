import OperandsType from "./project/Constructors/OperandsType";
import InitialOperandType from "./project/Operands/basic/InitialOperandType";

interface writeFetchedDataFromArrayType {
  [x: string | number]: string[] |
  InitialOperandType[];
}

export default function writeFetchedDataFromArray(fetchedData: writeFetchedDataFromArrayType | string[], localData: writeFetchedDataFromArrayType | string[]) {
  
  // console.log(Object.keys(localData));
  for (let el in fetchedData) {
    
  }
  localData = fetchedData;
  
  // console.log(localData)
}