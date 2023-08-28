import operands from ".";

const simpleOperands = operands.map(elObj => Object.values(elObj).map(el => el.str).join());

export default simpleOperands;