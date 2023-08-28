import simpleOperand from './project/Operands/basic/simpleOperands';
import simplestOperand from './project/Operands/basic/simplestOperand';
import regExpStr from './system/regExp';
import constants from './system/constants';
import extendedOperandsArr from './project/Operands/extended/extendedOperandsArr';
import operands from './project/Operands/basic';
import Constants from './Constructors/Constants';
import frontConfig from './frontConfig';
import errorMsg from './Errors/errorMsg';
import warning from './Errors/warningMsg'
import CustomError from './Errors';
import extendedForCalc from './project/Operands/extended/extendedForCalc';
import extendedRenderOperands from './project/Operands/extended/extendedRenderOperands';
import extendedOperands from './project/Operands/extended';
import regExp from './system/regExp/regExp';
import flags from './system/regExp/flags';

function buildCommonConfig() {

  Object.values(operands).forEach(elObj => {
    for (const [key, value] of Object.entries(elObj)) { // Only one iteration
      constants[key] = new Constants(value.str);
    }
  });

  const forbiddenSymbolToAddingPlusAfterMinus = [
    constants.openRoundBracket.str,
    constants.minus.str,
    ...simpleOperand //,
    // ...operand.oneOperand,
  ];

  regExpStr.simplestOperand = `([\\${simplestOperand.join('\\')}])`;
  regExpStr.expressionInBrackets = `(?<=(?<extendedOperator>${extendedOperandsArr.join('|')})?)(\\${constants.openRoundBracket.str}(?<elExp>${regExpStr.digit}(${regExpStr.simplestOperand}${regExpStr.digit})+)\\${constants.closeRoundBracket.str})`;
  regExpStr.missingMultipleSymbol = `(?<=${regExpStr.digit}).{0}(?=\\${constants.openRoundBracket.str})`;
  regExpStr.duplicateOperands = `([${simplestOperand.join()}])\\1+`;
  regExpStr.singleOperands = `(?<extendedOperator>${extendedOperandsArr.join('|')})\\${constants.openRoundBracket.str}(?<digit>${regExpStr.digit})\\${constants.closeRoundBracket.str}`;
  regExpStr.wrongSingleOperands = `(${extendedOperandsArr.join('|')})(?!\\${constants.openRoundBracket.str})`;
  regExpStr.trailingDot = `(?<!\\d)\\.`;
  regExpStr.insertPlusBeforeMinusButNotZeroPos = `(?<=[^\\.|${
    forbiddenSymbolToAddingPlusAfterMinus.join('|')
  }])-`;

  Object.keys(regExpStr).forEach(elRegExpKey => {
    regExp[elRegExpKey] = new RegExp(regExpStr[elRegExpKey]);
  });

  frontConfig.errors = {};
  frontConfig.errors.errorMsg = errorMsg;
  frontConfig.errors.customError = CustomError;
  frontConfig.errors.warningMsg = warning;
  frontConfig.project = {};
  frontConfig.project.operands = {};
  frontConfig.project.operands.extended = {};
  frontConfig.project.operands.extended.extendedOperands = extendedOperands;
  frontConfig.project.operands.extended.extendedForCalc = extendedForCalc;
  frontConfig.project.operands.extended.extendedOperandsArr = extendedOperandsArr;
  frontConfig.project.operands.extended.extendedRenderOperands = extendedRenderOperands;
  frontConfig.system = {};
  frontConfig.system.flags = flags;
  frontConfig.system.regExpStr = regExpStr;

  // console.log(frontConfig);

}

export default buildCommonConfig;