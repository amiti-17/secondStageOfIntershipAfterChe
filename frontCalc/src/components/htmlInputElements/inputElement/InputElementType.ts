import HtmlElementType from "../../htmlElements/htmlElement/HtmlElementType";

export default interface InputElementType extends HtmlElementType {
  [x: string]: any;
  focusSet(correction?:number): number;
  focusSetPosition(correction?:number): void;
  focusGetCurrentPos(): number;
  focusSetStart(): void;
  focusSetEnd(): void;
  setType(type: string): void;
  setId(id: string): void;
  setValue(value: string): void;
  getValue(): string;
  getValueWithoutSpace(): string;
  blur(): void;
  clearValue(): void;
  smartBackSpaceValue(): void;
  inputCharOnCurrentFocus(char: string): void;
}