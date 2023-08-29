import FetchedHistoryType from "@/config/system/Types/FetchedHistoryType";
import HistoryControlButtonsState from "@/config/system/Types/HistoryControlButtonsState";

export default function checkButtonDisappear(
  historyControlButtonsState: HistoryControlButtonsState,
  calcHistory: FetchedHistoryType,
  isPrevOn: Boolean,
  setIsPrevOn: React.Dispatch<React.SetStateAction<boolean>>,
  isNextOn: Boolean, 
  setIsNextOn: React.Dispatch<React.SetStateAction<boolean>>

) {
  if (historyControlButtonsState.offset + historyControlButtonsState.limit >= calcHistory.length) {
    setIsPrevOn(false);
  } else {
    if (!isPrevOn) setIsPrevOn(true);
  }

  if (historyControlButtonsState.offset <= 0) {
    setIsNextOn(false)
  } else {
    if (!isNextOn) setIsNextOn(true);
  }
}