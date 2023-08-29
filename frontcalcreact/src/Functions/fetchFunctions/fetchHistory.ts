import CustomError from "@/config/Errors";
import errorMsg from "@/config/Errors/errorMsg";
import FetchedHistoryType from "@/config/system/Types/FetchedHistoryType";
import generalUrls from "@/config/system/fetchConfig/generalUrls";


export default async function fetchHistory(
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>, 
  offset: number, 
  limit: number,
): Promise<FetchedHistoryType> {

  const currentUrl = generalUrls.baseUrl + generalUrls.backSlash + generalUrls.historyUrl + generalUrls.questionStr + 
    generalUrls.offset + generalUrls.equalStr + String(offset) + generalUrls.logicalAndStr +
    generalUrls.limit + generalUrls.equalStr + String(limit);

  try {
    return (await fetch(currentUrl)).json();
  } catch(e: any) {
    console.error(e instanceof Error ? e.message + ". Some going wrong in fetchHistory()" : "");
    setErrorMessage(e instanceof Error ?
      e.message + ". Some going wrong in fetchHistory()" :
      "some going wrong in fetchHistory()");
      throw new CustomError(errorMsg.errorInFetchHistory);
  };
}