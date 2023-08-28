import fetchConfig from "./fetchConfig";

export default async function writeFetchedDataByFilePath(path: string) {
  // console.log('comingPath: ', path);
  // console.log(path, './system/regExp');
  // don`t work: require(path), 
  // work: require(`${path}`), require("" + path)
  const localConfig = require("." + path); // const localConfig = require("." + path);
  // console.log('local: ', localConfig);
  // const serverPath = (path.match(/(?<=\.).*/) || ['not Today'])[0];
  // console.log(serverPath);
  const fetchedConfigData = await fetchConfig(path);
  // console.log('external: ', fetchedConfigData);
  Object.keys(fetchedConfigData).forEach(key => {
    localConfig.default[key] = fetchedConfigData[key];
  });

//   console.log(localConfig);
}