import CustomError from "../../../config/Errors";
import errorMsg from "../../../config/Errors/errorMsg";
import constants from "../../../config/system/constants";
import HtmlElementType from "./HtmlElementType";

export default class HtmlElement implements HtmlElementType {
  element;
  constructor(elementName: string) {
    this.element = document.createElement(elementName);
  }
  clearHTML() {
    if (this.element) {
      this.element.innerHTML = constants.emptyStr.str;
    } else {
      throw new CustomError(errorMsg.noElementFieldHere)
    }
  }
  clear() {
    if (this.element) {
      this.element.innerText = constants.emptyStr.str;
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }
  // addChild(child: ) { // Тут треба перелічити всі типи можливих елементів, які можуть бути в якості нащадків...
  //   if (this.element) {
  //     this.element.appendChild(child);
  //   }
  // }
  setHTML(html: string) {
    if (this.element) {
      this.element.innerHTML = html;
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }
  setClass(className: string) {
    if (this.element) {
      if(!this.element.classList.contains(className)) this.element.classList.add(className);
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }
  isClassExist(className: string) {
    const tempBool: boolean = Boolean(this.element.classList.contains(className))
    return this.element ? tempBool : false;
  }
  removeClass(className: string) {
    if (this.element) {
      this.element.classList.remove(className);
    } else {
      throw new CustomError(errorMsg.noElementFieldHere);
    }
  }
}