import CustomError from "../../config/Errors";
import errorMsg from "../../config/Errors/errorMsg";
import LinkedInputButtonElement from "../htmlInputElements/LinkedInputButtonElement";
import InputElementType from "../htmlInputElements/inputElement/InputElementType";

export default function fillUsingLinkedButton(myInput: InputElementType, ...args: string[]) {
  const myDialPadComponents = args.map(inputElement => {
    const currentButton = new LinkedInputButtonElement(String(inputElement), myInput);
    if (currentButton.inputElement === null) throw new CustomError(errorMsg.noElementFieldHere);
    return currentButton.inputElement;
  });
  // console.log({myDialPadComponents});
  return myDialPadComponents;
}