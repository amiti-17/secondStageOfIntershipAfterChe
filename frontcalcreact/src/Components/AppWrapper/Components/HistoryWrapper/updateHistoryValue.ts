import fetchHistory from "@/Functions/fetchFunctions/fetchHistory";
import FetchedHistoryType from "@/config/system/Types/FetchedHistoryType";
import HistoryControlButtonsState from "@/config/system/Types/HistoryControlButtonsState";

export default async function updateHistoryValue(
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  calcHistory: FetchedHistoryType,
  setCalcHistory: React.Dispatch<React.SetStateAction<FetchedHistoryType>>,
  historyControlButtonsState: HistoryControlButtonsState
) {
  try {
    console.log(historyControlButtonsState.offset, historyControlButtonsState.limit);
    const fetchedData = await fetchHistory(
      setErrorMessage, 
      historyControlButtonsState.offset, 
      historyControlButtonsState.limit
    );
    fetchedData.history.forEach(el => console.log(el));
    // console.log()
    setCalcHistory(fetchedData);
  } catch (error) {
    console.error(error + ". Something is going wrong in updateHistoryValue()");
    setErrorMessage(error + ". Something is going wrong in updateHistoryValue()");
  }
}