export default function setValueWithoutFocus(myInput, value) {
  myInput.setValue(value);
  myInput.focusSetEnd();
  myInput.blur();
}