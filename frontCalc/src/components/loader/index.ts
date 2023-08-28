import uiConstants from "../../config/system/constants/uiConstants"
import cssConstants from "../../config/system/constants/uiConstants/cssConstants"
import DivBoxElement from "../htmlElements/DivBoxElement"

export default function renderLoader() {
  const loader = new DivBoxElement(cssConstants.loader);
  loader.element.id = cssConstants.loader;
  const loaderCircle = new DivBoxElement(cssConstants.loaderCircle);
  loader.element.appendChild(loaderCircle.element);
  console.log(uiConstants);
  document.body.append(loader.element)
}