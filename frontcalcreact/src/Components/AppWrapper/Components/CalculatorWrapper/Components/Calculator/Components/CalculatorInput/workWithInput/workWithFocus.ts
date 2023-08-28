export default function workWithFocus(
  // e: React.ChangeEvent<HTMLInputElement>,
  inputPosition: number,
  setInputPosition: React.Dispatch<React.SetStateAction<number>>
  // myInput: HTMLInputElement
) {

  const myInput = (document.querySelector('input[type="text"]') as HTMLInputElement);

  myInput.setSelectionRange(inputPosition, inputPosition);
  myInput.focus();
  
}