import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import HistoryContext from "@/Context/HistoryContext";
import ListItem from "./Components/ListItem";
import GeneralContext from "@/Context";
import ControlElements from "./ConrtolElements";
import useCalcHistory from "@/Hooks/useCalcHistory";
import initialHistoryConfig from "@/config/public/initialHistoryConfig";
import updateHistoryValue from "./updateHistoryValue";
import { ChakraProvider, Fade, useDisclosure } from '@chakra-ui/react'
import ToggleHistory from "./Components/ToggleHistory";

export default function HistoryWrapper() {

  const { calcHistory, setCalcHistory } = useCalcHistory();
  const { shouldUpdateHistory, setShouldUpdateHistory, setErrorMessage } = useContext(GeneralContext);
  // const [ historyOffsetState, setHistoryOffsetState ] = useState(initialHistoryConfig.offset);
  // const [ historyLimitState, setHistoryLimitState ] = useState(initialHistoryConfig.limit);
  const [ historyControlButtonsState, setHistoryControlButtonsState ] = useState(initialHistoryConfig);
  const { isOpen, onToggle } = useDisclosure();
  
  const historyContextValue = { 
    calcHistory, setCalcHistory,
    historyControlButtonsState, setHistoryControlButtonsState
    // historyOffsetState, setHistoryOffsetState,
    // historyLimitState, setHistoryLimitState,
  };

  useEffect(() => {
    updateHistoryValue(setErrorMessage, calcHistory, setCalcHistory, historyControlButtonsState);
  }, []);

  useEffect(() => {
    // updateHistoryValue(setErrorMessage, calcHistory, setCalcHistory, initialHistoryConfig);
    setHistoryControlButtonsState(initialHistoryConfig);
    setShouldUpdateHistory(false);
  }, [shouldUpdateHistory]);
 
  // async function updateHistory(action: string, ) 

  return (
  <HistoryContext.Provider value={historyContextValue}>
    <ChakraProvider>
      <div className={style.historyWrapper}>
        <ToggleHistory toggle={onToggle} />
        <Fade in={isOpen}>
          <ul>
            {
              calcHistory.history && calcHistory.history.map(elObj => {
                return <ListItem currentData={elObj} key={elObj._id.toString()} />
              })
            }
          </ul>
          <ControlElements />
        </Fade>
      </div>
    </ChakraProvider>
  </HistoryContext.Provider>
  )
}