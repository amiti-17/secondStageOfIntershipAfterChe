import CustomError from "../config/Errors";
import myHeaders from "../config/fetchConfig/headers";
import methods from "../config/fetchConfig/methods";
import generalUrls from "../config/fetchConfig/urls";
import constants from "../config/system/constants";
import ResDataType from "./ResDataType";

// function fetchData12(field: string): string {
//   const headers = new Headers();
//   // headers.append("Content-Type", "application/json;charset=UTF-8");
//   // headers.append("Access-Control-Allow-Origin", "*");
//   // headers.append("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS");
//   headers.append("Access-control-allow-origin", "no-cors");
//   headers.append('Content-Type', 'application/json;charset=utf-8')
//   const body = {
//     exp: "it`s client req..."
//   }

//   let response;
//    const sendToCalc = async () => {
//     const calcData = await fetch('http://localho.st:3000/api/calc/', {
//       method: 'put',
//       headers,
//       body: JSON.stringify(body)
//     })
//     response = await calcData.json();
    
//   }
    
//   sendToCalc();

//   console.log(response)
//   return response ? 'true' : "none";
// }

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
  return [{ exp: constants.emptyStr.str }];
}

export default fetchData;