import { useState } from "react";

export default function useInputValue(init: string) {
  
  const [inputValue, setInputValue] = useState(init);

  return { inputValue, setInputValue }
}