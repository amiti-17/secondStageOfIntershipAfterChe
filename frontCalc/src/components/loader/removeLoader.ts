import cssConstants from "../../config/system/constants/uiConstants/cssConstants";

export default function removeLoader() {
  const loader = document.getElementById(cssConstants.loader)?.remove();
}