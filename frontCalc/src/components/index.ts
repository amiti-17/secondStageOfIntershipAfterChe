import CustomError from "../config/Errors";
import errorMsg from "../config/Errors/errorMsg";
import uiValues from "../config/project/uiValues";
import cssConstants from "../config/system/constants/uiConstants/cssConstants";
import DivBoxElement from "./htmlElements/DivBoxElement";
import InputElement from "./htmlInputElements/inputElement";
import fillUsingLinkedButton from "./utils/createButtonsArray";
import fillUsingSpecialButtons from "./utils/createCustomButtonsArray";


// Here just compile every thing on page with only this composeUi()


export default function render() {

  const divWithAllButtons = new DivBoxElement(cssConstants.divWithAllButtons);
  const divWithKeyControlButtons = new DivBoxElement(cssConstants.divWithKeyControlButtons);
  const divForGroupingAdditionalAndNumbersButtons = new DivBoxElement(cssConstants.divForGroupingAdditionalAndNumbers);
  const divWithNumbersButtons = new DivBoxElement(cssConstants.divWithNumbersButtons);
  const divWithAdditionalControlButtons = new DivBoxElement(cssConstants.divWithAdditionalControlButtons);
  const divWithAllBasicButtons = new DivBoxElement(cssConstants.divWithAllBasicButtons);
  const divWithExtendedOperands = new DivBoxElement(cssConstants.divWithExtendedOperands);
  const myInput = new InputElement('text');
  if (myInput.inputElement === null) throw new CustomError(errorMsg.noElementFieldHere);

  divWithNumbersButtons.element.append(...fillUsingLinkedButton(
    myInput, 
    ...uiValues.mainNumberButtons
  ));
  divWithKeyControlButtons.element.append(...fillUsingLinkedButton(
    myInput,
    ...uiValues.keyControlButtons
  ));
  divWithAdditionalControlButtons.element.append(...fillUsingSpecialButtons(
    myInput,
    ...uiValues.inputControlButtons
  ));
  divForGroupingAdditionalAndNumbersButtons.element.append(
    divWithAdditionalControlButtons.element,
    divWithNumbersButtons.element
  );
  divWithExtendedOperands.element.append(...fillUsingLinkedButton(myInput, ...uiValues.extendedOperands));
  divWithAllBasicButtons.element.append(
    divForGroupingAdditionalAndNumbersButtons.element,
    divWithKeyControlButtons.element
  );
  divWithAllButtons.element.append(
    divWithAllBasicButtons.element, 
    divWithExtendedOperands.element
  );

  document.body.append(
    myInput.inputElement,
    divWithAllButtons.element
  );
  
  return { myInput };
}