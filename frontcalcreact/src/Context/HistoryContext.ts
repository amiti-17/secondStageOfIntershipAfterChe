import HistoryControlButtonsState from "@/config/system/Types/HistoryControlButtonsState";
import FetchedHistoryType from "@/config/system/Types/FetchedHistoryType";
import StorageType from "@/config/system/Types/StorageType";
import React from "react";

export type HistoryContextType = {
  calcHistory: FetchedHistoryType,
  setCalcHistory: React.Dispatch<React.SetStateAction<FetchedHistoryType>>,
  // setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  historyControlButtonsState: HistoryControlButtonsState,
  setHistoryControlButtonsState: React.Dispatch<React.SetStateAction<HistoryControlButtonsState>>,
  // historyOffsetState: number,
  // setHistoryOffsetState: React.Dispatch<React.SetStateAction<number>>,
  // historyLimitState: number,
  // setHistoryLimitState: React.Dispatch<React.SetStateAction<number>>,
}

const historyContext: HistoryContextType = {
  calcHistory: {} as FetchedHistoryType,
  setCalcHistory: () => {},
  // setErrorMessage: () => {},
  historyControlButtonsState: {} as HistoryControlButtonsState, 
  setHistoryControlButtonsState: () => {},
  // historyOffsetState: 0,
  // setHistoryOffsetState: () => {},
  // historyLimitState: 1,
  // setHistoryLimitState: () => {},
};

const HistoryContext = React.createContext(historyContext);

export default HistoryContext;