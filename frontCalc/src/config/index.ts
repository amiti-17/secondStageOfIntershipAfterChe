import regExpStr from './system/regExp';
import writeFetchedData from './writeFetchedData';
import fetchConfig from './fetchConfig';
import errorMsg from './Errors/errorMsg';
import warning from './Errors/warningMsg';
import extendedForCalc from './project/Operands/extended/extendedForCalc';
import extendedOperandsArr from './project/Operands/extended/extendedOperandsArr';
import extendedOperands from './project/Operands/extended';
import extendedRenderOperands from './project/Operands/extended/extendedRenderOperands';
import flags from './system/regExp/flags';
import regExp from './system/regExp/regExp';


async function buildConfig() {
  
  const frontConfig = await fetchConfig();

  // console.log(frontConfig);
  writeFetchedData(frontConfig.errors.errorMsg, errorMsg);
  writeFetchedData(frontConfig.errors.warningMsg, warning);
  writeFetchedData(frontConfig.project.operands.extended.extendedForCalc, extendedForCalc);
  writeFetchedData(frontConfig.project.operands.extended.extendedOperands, extendedOperands);
  writeFetchedData(frontConfig.project.operands.extended.extendedOperandsArr, extendedOperandsArr);
  writeFetchedData(frontConfig.project.operands.extended.extendedRenderOperands, extendedRenderOperands);
  writeFetchedData(frontConfig.system.flags, flags);
  writeFetchedData(frontConfig.system.regExpStr, regExpStr);

  Object.keys(regExpStr).forEach(el => {
    regExp[el] = new RegExp(regExpStr[el]);
  })
  









  // await writeFetchedData("/system/regExp");
  // console.log({regExp});
  //   const regExpFetched = await fetchConfig('/system/regExp');
  //   // console.log({regExpFetched});
  //   Object.keys(regExpFetched).forEach(key => {
  //     regExp[key] = regExpFetched[key];
  //   });

  // await writeFetchedData("/system/regExp/flags");
  // await writeFetchedData("/system/constants");
  // await writeFetchedData("/system/constants/numbers");
  // // await writeFetchedData("/system/constants/uiConstants");
  // // await writeFetchedData("/system/constants/uiConstants/cssConstants");
  // // await writeFetchedData("/system/constants/Constructors/NumConstants");
  // // await writeFetchedData("/project/Constructors");
  // // await writeFetchedData("/project/Constructors/CalcControlFunc");
  // // await writeFetchedData("/project/Constructors/OperandsType");
  // await writeFetchedData("/project/Operands/basic");
  // // await writeFetchedData("/project/Operands/basic/InitialOperandType");
  // await writeFetchedData("/project/Operands/basic/simpleOperands");
  // await writeFetchedData("/project/Operands/basic/simpleRenderOperand");
  // await writeFetchedData("/project/Operands/basic/simplestOperand");
  // await writeFetchedData("/project/Operands/extended");
  // await writeFetchedData("/project/Operands/extended/extendedForCalc");
  // await writeFetchedData("/project/Operands/extended/extendedOperandsArr");
  // await writeFetchedData("/project/Operands/extended/extendedRenderOperands");

  // const flagsFetched = await fetchConfig('/system/regExp/flags');
  // Object.keys(flagsFetched).forEach(key => {
  //   flags[key] = flagsFetched[key];
  // });
  
  // const constantsFetched = await fetchConfig('/system/constants');
  // Object.keys(constantsFetched).forEach(key => {
  //   constants[key] = constantsFetched[key];
  // });

  // const numbersFetched = await fetchConfig('/system/constants/numbers');
  // Object.keys(numbersFetched).forEach(key => {
  //   numbers[key] = numbersFetched[key];
  // });

//   const uiConstantsFetched = await fetchConfig('/system/constants/uiConstants');
//   Object.keys(uiConstantsFetched).forEach(key => {
//     uiConstants[key] = uiConstantsFetched[key];
//   });

//   console.log(regExp);
//   console.log(numbersFetched);
}

export default buildConfig;