import extendedOperands from ".";

const extendedOperandsArr = extendedOperands.map(elObj => Object.values(elObj).map(el => el.str).join());

export default extendedOperandsArr;