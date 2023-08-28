import configDB from "../configDB";
import dbAPI from "./dbAPI";
import defaultDBObj from "./defaultDb/defaultDBObj";
import MongoDb from "./mongoDb";
import mongooseConnect from "./mongoDb/mongooseConnect";
import PostgresDb from "./postgresDb";
import postgresConnect from "./postgresDb/postgresConnect";

export default async function chooseDbAPI(mode: string) {

  if (mode === configDB.mongo) {
    console.log('trying connect to ' + configDB.mongo);
    const currentMongoDb = await mongooseConnect();
    if (currentMongoDb) {
      dbAPI.dataBase = new MongoDb(currentMongoDb);
      return;
    }
  } 
    
  if (mode === configDB.postgres) {
    const currentPostgresDb = await postgresConnect();
    if (currentPostgresDb) {
      dbAPI.dataBase = new PostgresDb(currentPostgresDb);
      return;
    }
  }

  dbAPI.dataBase = defaultDBObj;
}