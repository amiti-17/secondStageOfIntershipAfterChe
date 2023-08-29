import configDB from "../configDB";
import dbAPI from "./dbAPI";
import defaultDBObj from "./defaultDb/defaultDBObj";
import MongoDb from "./mongoDb";
import mongooseConnect from "./mongoDb/mongooseConnect";
import NormalizeDb from "./NormalizeDb";
import PostgresDb from "./postgresDb";
import postgresConnect from "./postgresDb/postgresConnect";

export default async function chooseDbAPI(mode: string) {

  if (mode === configDB.mongo) {
    console.log('trying connect to ' + configDB.mongo);
    const currentMongoDb = await mongooseConnect();
    if (currentMongoDb) {
      dbAPI.rawDataBase = new MongoDb(currentMongoDb);
      dbAPI.dataBase = new NormalizeDb(dbAPI.rawDataBase);
      return;
    }
  } 
    
  if (mode === configDB.postgres) {
    console.log('trying connect to ' + configDB.postgres);
    const currentPostgresDb = await postgresConnect();
    if (currentPostgresDb) {
      dbAPI.rawDataBase = new PostgresDb(currentPostgresDb);
      dbAPI.dataBase = new NormalizeDb(dbAPI.rawDataBase);
      return;
    }
  }

  dbAPI.dataBase = defaultDBObj;
}