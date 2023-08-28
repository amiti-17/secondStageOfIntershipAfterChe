import { useState } from "react";

export default function useInputPosition() {
  const [ inputPosition, setInputPosition ] = useState(0);

  return { inputPosition, setInputPosition }
}