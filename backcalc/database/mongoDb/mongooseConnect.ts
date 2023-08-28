import mongoose from "mongoose";
import mongoConfig from "../../configDB/mongoConfig";
import configDB from "../../configDB";
import setAppMode from "../setAppMode";

export default async function mongooseConnect(): Promise<typeof mongoose | undefined> {
  mongoose.Promise = global.Promise;

  return mongoose
    .connect(mongoConfig.uri, {
      user: mongoConfig.user,
      pass: mongoConfig.pwd,
    })
    .then((some) => {
      console.log("successfully connected to the mongo database");

      setAppMode(configDB.mongo);

      mongoConfig.connect = true;
    
      return mongoose;
    })
    .catch((err) => {

      // console.log(configDB.mode, configDB.mongo)

      // if (configDB.mode === configDB.mongo) {
      //   setAppMode(configDB.mongo, false);
      //   console.error("enable connect to mongoDB, app switched to common mode");
      // } else {
      //   console.log("error connecting to the mongo database");
      // }
      
      console.log("error connecting to the mongo database");
      setAppMode(configDB.mongo, false);

      mongoConfig.connect = false;

      
      return undefined;
      // process.exit();
    });

}


