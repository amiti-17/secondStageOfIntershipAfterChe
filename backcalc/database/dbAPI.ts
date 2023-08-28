import DataBaseType from "./Types/DateBaseType";
import chooseDbAPI from "./chooseDbAPI";
import defaultDBObj from "./defaultDb/defaultDBObj";


interface dbAPIType {
  dataBase: DataBaseType,
  // chooseDbAPI: () => {},
}

const dbAPI: dbAPIType = {
  dataBase: defaultDBObj,
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
