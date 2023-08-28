import initialHistoryConfig from "@/config/public/initialHistoryConfig";
import FetchedHistoryType from "@/config/system/Types/FetchedHistoryType";
import HistoryControlButtonsState from "@/config/system/Types/HistoryControlButtonsState";

export default function fixConfig(
  historyControlButtonsState: HistoryControlButtonsState,
  setHistoryControlButtonsState: React.Dispatch<React.SetStateAction<HistoryControlButtonsState>>,
  // setHistoryOffsetState: React.Dispatch<React.SetStateAction<number>>,
  // historyOffsetState: number,
  // setHistoryOffsetState: React.Dispatch<React.SetStateAction<number>>,
  // historyLimitState: number,
  // setHistoryLimitState: React.Dispatch<React.SetStateAction<number>>,
  calcHistory: FetchedHistoryType,
  shouldUpdateHistory: boolean,
  setShouldUpdateHistory: React.Dispatch<React.SetStateAction<boolean>>
) {

  historyControlButtonsState.limit = initialHistoryConfig.limit;

  // let wasCorrect = true;
  
  // const rightConfig = {
  //   offset: historyControlButtonsState.offset,
  //   limit: historyControlButtonsState.limit,
  // }

  console.log("fixConfig receive: ", historyControlButtonsState);
  if (historyControlButtonsState.offset >= calcHistory.length) {
    // wasCorrect = false;
    console.log(`historyOffsetState: ${historyControlButtonsState.offset} >= calcHistory.length ${calcHistory.length}`);
    // rightConfig.offset = historyControlButtonsState.offset - historyControlButtonsState.limit;
    
    historyControlButtonsState.offset -= historyControlButtonsState.limit;

    console.log("updated config: ", historyControlButtonsState);
  }

  console.log(historyControlButtonsState.offset, initialHistoryConfig.limit, calcHistory.length)

  if (historyControlButtonsState.offset + initialHistoryConfig.limit > calcHistory.length) {
    // wasCorrect = false;
    console.log(`historyOffsetState + initialHistoryConfig.limit: ${historyControlButtonsState.offset + initialHistoryConfig.limit} > calcHistory.length ${calcHistory.length}`);
    // setHistoryLimitState(calcHistory.length - historyControlButtonsState.offset);
    // rightConfig.limit = calcHistory.length - historyControlButtonsState.offset;
    
    historyControlButtonsState.limit = calcHistory.length - historyControlButtonsState.offset;

    console.log("updated config: ", historyControlButtonsState);
  }

  // if it shouldn`t be executed...               never...
  if (historyControlButtonsState.offset < 0) {
    // wasCorrect = false;
    console.warn("it`s triggered")
    // setHistoryLimitState(historyControlButtonsState.limit);
    // setHistoryOffsetState(0);
    // rightConfig.offset = initialHistoryConfig.offset;
    // rightConfig.limit = initialHistoryConfig.limit;

    historyControlButtonsState.offset = initialHistoryConfig.offset;
    historyControlButtonsState.limit = initialHistoryConfig.limit;

  }

  setHistoryControlButtonsState(historyControlButtonsState);

  // if (!shouldUpdateHistory && wasCorrect) {
  //   setShouldUpdateHistory(true);
  // }
  // return rightConfig;

}