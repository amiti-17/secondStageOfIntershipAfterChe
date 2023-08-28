import FetchedHistoryType from "@/config/system/Types/FetchedHistoryType";
import { useState } from "react";

export default function useCalcHistory() {

  const initialObj = {} as FetchedHistoryType;

  const [calcHistory, setCalcHistory] = useState(initialObj);

  return { calcHistory, setCalcHistory }
}