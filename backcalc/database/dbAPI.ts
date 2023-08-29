import DateBaseType from "./Types/DateBaseType";
import RawDateBaseType from "./Types/RawDateBaseType";
import chooseDbAPI from "./chooseDbAPI";
import defaultDBObj from "./defaultDb/defaultDBObj";


interface dbAPIType {
  dataBase: DateBaseType,
  rawDataBase: RawDateBaseType,
  // chooseDbAPI: () => {},
}

const dbAPI: dbAPIType = {
  dataBase: defaultDBObj,
  rawDataBase: {} as RawDateBaseType,
  // chooseDbAPI: chooseDbAPI,
};

// const dataBase: {
//   [prop: string]: DataBaseType;
// } = {
//   mongo: {
//     get: myMongoDb.get,
//     create: myMongoDb.create,
//     list: myMongoDb.list,
//   },
// };

export default dbAPI;
