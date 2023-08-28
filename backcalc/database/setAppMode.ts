import constants from "../configCommon/system/constants";
import configDB from "../configDB";
import chooseDbAPI from "./chooseDbAPI";

export default function setAppMode(currentMode: string, value: boolean = true): void {

  if (!configDB.mode && value) {
    configDB.mode = currentMode;
  }

  if (configDB.mode === currentMode && !value) {
    configDB.mode = constants.emptyStr.str;
  }

  // chooseDbAPI();

  console.log(`App use ${configDB.mode} mode`);
}