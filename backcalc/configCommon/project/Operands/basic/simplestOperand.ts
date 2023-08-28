import operands from ".";

const simplestOperands = operands.slice(0, 3).map(elObj => Object.values(elObj).map(el => el.str).join());

export default simplestOperands;