import operands from ".";

const simpleRenderOperands = operands.map(elObj => Object.values(elObj).map(el => {
  if (el.display) {
    return el.display.value;
  }
  return el.str;
}).join());

export default simpleRenderOperands;