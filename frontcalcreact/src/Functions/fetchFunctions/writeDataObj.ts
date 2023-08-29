import OperandsType from "@/config/public/Constructors/OperandsType";
import InitialOperandType from "@/config/public/Operands/basic/InitialOperandType";


interface writeDataObjVariableType {
  [x: string | number]: string |    // for what I need here number???
  string[] |
  RegExp |
  OperandsType |
  InitialOperandType | 
  InitialOperandType[];
}

type writeDataObjVariableGeneralType = writeDataObjVariableType | string[] | InitialOperandType[];

export default function writeDataObj(
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  fetchedData: writeDataObjVariableGeneralType, 
  localData: writeDataObjVariableGeneralType
) {
  
    
  console.log(Object.keys(localData));
  try {
    Object.keys(fetchedData).forEach((el: any) => {
      // console.log(el, typeof el);
      localData[el] = fetchedData[el];
    });
  } catch (error) {
    setErrorMessage(error instanceof Error ? error.message + ". some going wrong in writeDataObj()" : "some going wrong in writeDataObj()")
    console.error(error instanceof Error ? error.message + ". some going wrong in writeDataObj()" : "some going wrong in writeDataObj()");
  }
  


  
  // console.log(localData)
}

// export default function writeFetchedData<T>(fetchedData: T, localData: T) {
  
    
//   // console.log(Object.keys(localData));
  
//   Object.keys(fetchedData).forEach((el: any) => {
//     // console.log(el, typeof el);
//     localData[el] = fetchedData[el];
//   });

// }