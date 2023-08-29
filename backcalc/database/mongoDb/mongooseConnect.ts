import mongoose from "mongoose";
import mongoConfig from "../../configDB/mongoConfig";
import configDB from "../../configDB";
// import setAppMode from "../setAppMode";

export default async function mongooseConnect(): Promise<typeof mongoose | undefined> {
  mongoose.Promise = global.Promise;

  return mongoose
    .connect(mongoConfig.uri, {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PWD,
    })
    .then((some) => {
      console.log("successfully connected to the mongo database");
      // setAppMode(configDB.mongo);

      mongoConfig.connect = true;
    
      return mongoose;
    })
    .catch((err) => {
      console.log("error connecting to the mongo database");
      // setAppMode(configDB.mongo, false);

      mongoConfig.connect = false;

      return undefined;
      // process.exit();
    });

}


