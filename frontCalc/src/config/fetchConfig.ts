import myHeaders from "../config/fetchConfig/headers";
import methods from "../config/fetchConfig/methods";
import generalUrls from "../config/fetchConfig/urls";

async function fetchConfig(pathConfig?: string) {

  pathConfig = pathConfig || "";

  const response = await fetch(generalUrls.baseUrl + generalUrls.backSlash + generalUrls.configUrl + pathConfig);

  const jsonData = await response.json();

  return jsonData;
}

export default fetchConfig;