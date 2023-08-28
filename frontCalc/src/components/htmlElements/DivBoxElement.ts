import uiConstants from "../../config/system/constants/uiConstants";
import HtmlElement from "./htmlElement";
import HtmlElementType from "./htmlElement/HtmlElementType";

export default class DivBoxElement extends HtmlElement implements HtmlElementType {
  constructor(className: string) {
    super(uiConstants.div)
    this.setClass(className);
  }
}