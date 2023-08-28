import React from "react";

export default function useInputElement() {

  const [ inputElement, setInputElement ] = React.useState();

  return { inputElement, setInputElement }
}