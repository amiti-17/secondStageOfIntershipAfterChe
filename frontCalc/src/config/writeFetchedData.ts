import OperandsType from "./project/Constructors/OperandsType";
import InitialOperandType from "./project/Operands/basic/InitialOperandType";

interface writeFetchedDataVariableType {
  [x: string | number]: string |    // for what I need here number???
  string[] |
  RegExp |
  OperandsType |
  InitialOperandType | 
  InitialOperandType[];
}

type writeFetchedDataVariableGeneralType = writeFetchedDataVariableType | string[] | InitialOperandType[];

export default function writeFetchedData(fetchedData: writeFetchedDataVariableGeneralType, localData: writeFetchedDataVariableGeneralType) {
  
    
  // console.log(Object.keys(localData));
  
  Object.keys(fetchedData).forEach((el: any) => {
    // console.log(el, typeof el);
    localData[el] = fetchedData[el];
  });


  
  // console.log(localData)
}

// export default function writeFetchedData<T>(fetchedData: T, localData: T) {
  
    
//   // console.log(Object.keys(localData));
  
//   Object.keys(fetchedData).forEach((el: any) => {
//     // console.log(el, typeof el);
//     localData[el] = fetchedData[el];
//   });

// }