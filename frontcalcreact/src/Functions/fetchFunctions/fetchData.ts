import CustomError from "@/config/Errors";
import ResDataType from "@/config/system/fetchConfig/ResDataType";
import generalUrls from "@/config/system/fetchConfig/generalUrls";
import myHeaders from "@/config/system/fetchConfig/myHeaders"
import methods from "@/config/system/fetchConfig/methods";

async function fetchData(args: {[key: string]: string}) {

  const headers = new Headers();
  const body = {
    ...args
  };

  headers.append(myHeaders.contentType, myHeaders.contentTypeValue);

  const response = await fetch(generalUrls.baseUrl + generalUrls.backSlash + generalUrls.calcUrl, {
    method: methods.put,
    headers,
    body: JSON.stringify(body)
  });

  let jsonData: ResDataType;
  try {
    jsonData = await response.json();
    return jsonData;
  } catch (error: any | unknown) {
    if (!(error instanceof Error)) {
      throw new CustomError(error.message);
    }
  }
  return { exp: "" };
}

export default fetchData;