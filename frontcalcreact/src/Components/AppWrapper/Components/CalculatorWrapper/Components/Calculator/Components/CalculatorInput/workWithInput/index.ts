import clearAll from "./clearAll";
import clearOneSymbol from "./clearOneSymbol";
import addValue from "./addValue";
import calculate from "@/frontCalc";

class MyInput {
  clearAll;
  clearOneSymbol;
  addValue;
  calculate;
  element!: HTMLInputElement | null;
  
  constructor() {
    this.clearAll = clearAll.bind(null);
    this.clearOneSymbol = clearOneSymbol.bind(null);
    this.addValue = addValue.bind(null);
    this.calculate = calculate.bind(null);
  }
};

const myInput = new MyInput();

export default myInput;