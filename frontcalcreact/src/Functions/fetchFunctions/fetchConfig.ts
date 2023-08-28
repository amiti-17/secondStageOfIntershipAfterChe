import generalUrls from "@/config/system/fetchConfig/generalUrls";

async function fetchConfig(setErrorMessage: React.Dispatch<React.SetStateAction<string>>, pathConfig?: string) {

  pathConfig = pathConfig || "";

  const response = await fetch(generalUrls.baseUrl + generalUrls.backSlash + generalUrls.configUrl + pathConfig).catch((e: any) => {
    console.error(e instanceof Error ? e.message : "");
    setErrorMessage(e instanceof Error ? e.message : "some going wrong in fetchConfig()")

  });

  if (response) {
    return await response.json();
  }

  return 
}

export default fetchConfig;