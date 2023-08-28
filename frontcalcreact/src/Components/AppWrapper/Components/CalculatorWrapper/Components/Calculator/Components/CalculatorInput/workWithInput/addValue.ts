import constants from "@/config/system/constants";

export default function addValue( 
  {inputValue, setInputValue, setInputPosition }: {
    inputValue: string, 
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    setInputPosition: React.Dispatch<React.SetStateAction<number>>
  }, 
  value: string
) {
  // debugger
  const myInput = document.querySelector('input[type="text"]') as HTMLInputElement;
  const currentPosition = myInput.selectionStart || 0;
  const newValue = value === constants.space.display?.value ? constants.space.str : value;

  setInputValue((inputValue: string) => {
    return inputValue.slice(0, currentPosition) + newValue + inputValue.slice(currentPosition, )
  });
  setInputPosition(currentPosition + newValue.length);
}