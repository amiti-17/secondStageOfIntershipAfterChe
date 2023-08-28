import numbers from "@/config/system/constants/numbers";

export default function clearOneSymbol( 
  {inputValue, setInputValue, setInputPosition}: {
    inputValue: string, 
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    setInputPosition: React.Dispatch<React.SetStateAction<number>>
  }
) {
  // const currentPosition = position || myInput.value.length;
  const myInput = document.querySelector('input[type="text"]') as HTMLInputElement;
  const currentPosition = myInput.selectionStart || myInput.value.length;
  if (currentPosition === numbers.zero.num) return;
  setInputValue((inputValue: string) => inputValue.slice(0, currentPosition - 1) + inputValue.slice(currentPosition, ));
  setInputPosition(currentPosition - 1);
}