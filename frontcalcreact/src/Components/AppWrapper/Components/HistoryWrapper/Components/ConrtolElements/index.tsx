import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import HistoryContext from "@/Context/HistoryContext";
import GeneralContext from "@/Context";
import updateHistoryValue from "../../updateHistoryValue";
import fixConfig from "./fixConfig";
import initialHistoryConfig from "@/config/public/initialHistoryConfig";
import checkButtonDisappear from "./checkButtonDisappear";
import HistoryControlButtonsState from "@/config/system/Types/HistoryControlButtonsState";

export default function ControlElements() {

  const { 
    calcHistory, setCalcHistory, 
    historyControlButtonsState,
    setHistoryControlButtonsState,
    // historyOffsetState, setHistoryOffsetState,
    // historyLimitState, setHistoryLimitState,
  } = useContext(HistoryContext);

  const { shouldUpdateHistory, setShouldUpdateHistory, setErrorMessage } = useContext(GeneralContext);
  
  const [ isPrevOn, setIsPrevOn ] = useState(
    calcHistory.length <= initialHistoryConfig.offset + initialHistoryConfig.limit ? false : true);
  // const [ isNextOn, setIsNextOn ] = useState(false);
  const [ isNextOn, setIsNextOn ] = useState(false);

  async function prevButtonOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    
    const currentHistoryControlButtonsState: HistoryControlButtonsState = {
      offset: historyControlButtonsState.offset + initialHistoryConfig.limit,
      limit: historyControlButtonsState.limit,
    }

    fixConfig(
      currentHistoryControlButtonsState,
      setHistoryControlButtonsState,
      // historyOffsetState, setHistoryOffsetState,
      // historyLimitState, setHistoryLimitState, 
      calcHistory,
      shouldUpdateHistory,
      setShouldUpdateHistory
    )

    // setHistoryControlButtonsState(currentHistoryControlButtonsState);

    
    // setHistoryOffsetState(historyOffsetState + initialHistoryConfig.limit);
    // setHistoryLimitState(initialHistoryConfig.limit);

    // fixConfig(
    //   historyControlButtonsState,
    //   setHistoryControlButtonsState,
    //   calcHistory);

    // updateHistoryValue(setErrorMessage, calcHistory, setCalcHistory, historyControlButtonsState);
    // console.log(calcHistory);
    // console.log(historyControlButtonsState);

    // checkButtonDisappear(historyControlButtonsState, calcHistory, isPrevOn, setIsPrevOn, isNextOn, setIsNextOn)
    // if (historyControlButtonsState.offset + historyControlButtonsState.limit >= calcHistory.length) {
    //   setIsPrevOn(false);
    // } else {
    //   if (!isPrevOn) setIsPrevOn(true);
    // }
  }
  
  async function nextButtonOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

    // console.log(historyControlButtonsState);
    if (historyControlButtonsState.offset - initialHistoryConfig.limit >= 0) {

      const currentHistoryControlButtonsState: HistoryControlButtonsState = {
        offset: historyControlButtonsState.offset - initialHistoryConfig.limit,
        limit: historyControlButtonsState.limit,
      }
      // setHistoryControlButtonsState(currentHistoryControlButtonsState);
      
      fixConfig(
        currentHistoryControlButtonsState,
        setHistoryControlButtonsState,
        // historyOffsetState, setHistoryOffsetState,
        // historyLimitState, setHistoryLimitState, 
        calcHistory,
        shouldUpdateHistory,
        setShouldUpdateHistory
      )

      // setHistoryControlButtonsState({
      //   offset: historyControlButtonsState.offset - initialHistoryConfig.limit,
      //   limit: historyControlButtonsState.limit,
      // })
      // setHistoryOffsetState(historyOffsetState - initialHistoryConfig.limit);
      // setHistoryLimitState(initialHistoryConfig.limit);

      
    }


    console.warn("it`s already the last page of history");

    // checkButtonDisappear(historyControlButtonsState, calcHistory, isPrevOn, setIsPrevOn, isNextOn, setIsNextOn);
    // if (historyControlButtonsState.offset <= 0) {
    //   setIsNextOn(false)
    // } else {
    //   if (!isNextOn) setIsNextOn(true);
    // }
  }

  useEffect(() => {
    // console.log(shouldUpdateHistory)
   
    // if (shouldUpdateHistory) {
      updateHistoryValue(
        setErrorMessage, 
        calcHistory, 
        setCalcHistory, 
        historyControlButtonsState
      );
    // }
    checkButtonDisappear(historyControlButtonsState, calcHistory, isPrevOn, setIsPrevOn, isNextOn, setIsNextOn);
    // setShouldUpdateHistory(false);
  }, [historyControlButtonsState, setHistoryControlButtonsState]);

  // useEffect(() => {
  //   checkButtonDisappear(historyControlButtonsState, calcHistory, isPrevOn, setIsPrevOn, isNextOn, setIsNextOn);
  // }, [shouldUpdateHistory])

  return (
    <div className={style.controlElementsSpan}>
      {
        isPrevOn && <button onClick={(e) => {
          prevButtonOnClick(e);
          console.log("click Prev")
        }}>prev</button>
      }

      {
        isNextOn && <button
          onClick={(e) => {
            nextButtonOnClick(e);
            console.log("click Next");
          }}
          >next</button>
      }
    </div>
  )
}
