require('dotenv').config();
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import calcRoutes from "./router/calcRoutes.js";
import configRoutes from "./router/configRoutes.js";
// import { default as commonConstants } from "../configCommon/constants.js";
import dirName from "./configBack/dirName.js"; // this name is not uniq in this project, be careful!
import defaultConf from "./configBack/index.js";
import cors from "cors";
import bodyParser from "body-parser";
import buildCommonConfig from "./configCommon";
import failRequest from "./controllers/failRequest.js";
import CustomError from "./configCommon/Errors/index.js";
import failResponse from "./myResponse/failResponse.js";
import HttpCodes from "./configBack/HttpCodes.js";
import ValidationError from "./configCommon/Errors/ValidationError.js";
import calcHistoryRoutes from "./router/calcHistoryRoutes.js";
import calcHistoryAllRoutes from "./router/calcHistoryAllRoutes.js";
import chooseDbAPI from "./database/chooseDbAPI.js";
import configDB from "./configDB/index.js";
import dbAPI from "./database/dbAPI.js";
import mongoose from "mongoose";

chooseDbAPI(configDB.mode);

async function test() {
//   if (dbAPI.rawDataBase.knex) {
//     const knex = dbAPI.rawDataBase.knex;
//     const resp = await knex.schema.alterTable("mycalcexp.mycalcexp", table => {
//         table.dropUnique(["calculated"]);
//     })
//     console.log("0", resp);
//   }

  // if (dbAPI.rawDataBase.CalcModel) {
  //   const CalcModel = dbAPI.rawDataBase.CalcModel;
  //   const resp = await CalcModel.find();
  //   resp.forEach(async el => {
  //     delete el.created_at;
  //     // el._id = new mongoose.Types.ObjectId();
  //     (await new CalcModel(el).save())
  //   })
  //   resp?._id = 
  //   console.log("0", resp);
  // }
    
  // const resp1 = await dbAPI.dataBase.delete({expression: "cos(2(1+(2*6)-3))"});
  // const resp2 = await dbAPI.dataBase.listAll();
  // const resp3 = await dbAPI.rawDataBase.create({expression: "7+7", calculated: "14"});
  // console.log("1", resp1)
  // console.log("2", resp2);
  // console.log("3", resp3);
}
  setTimeout(() => test(), 1000);

try {
  // test()
  // console.log("try", );
} catch (error) {
  console.log(error);
}



const app = express();

buildCommonConfig();

const PORT = process.env.PORT || defaultConf.port;

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.static(path.resolve(__dirname, dirName.static)));

app.use(express.json());
app.use(bodyParser.json()); // is it necessary?
app.use(express.urlencoded({ extended: false }));

app.use(configRoutes);
app.use(calcRoutes);
app.use(calcHistoryRoutes);
app.use(calcHistoryAllRoutes);

// app.get(dirName.rootDir, (req, res) => {
//   res.status(HttpCodes.REDIRECT).redirect(dirName.frontServer);
//   // res.send('<h1>Server for calculation was started</h1><br />Sent your request on /calc');
// }); // how add here link to my front Calculator?  -- question to you

app.use(failRequest);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    console.log("got Custom Error")
    failResponse(res, err.message);
    return;
  }
  if (err instanceof ValidationError) {
    failResponse(res, err.message, err.httpCode);
    return;
  }

  res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server was run on port ${PORT} ...`);
});

// my backapp)

// import express from "express";
// import path from "path";
// import calcRoutes from "./router/calcRoutes.js";
// import configRoutes from "./router/configRoutes.js";
// // import { default as commonConstants } from "../configCommon/constants.js";
// import dirName from "./configCommon/dirName.js"; // this name is not uniq in this project, be careful!
// import defaultConf from "./configBack/index.js";
// import cors from "cors";
// import bodyParser from "body-parser";
// import buildCommonConfig from "./configCommon";
// import badRequest from "./controllers/badRequest.js";

// buildCommonConfig();

// const app = express();
// const PORT = process.env.PORT ?? defaultConf.port;

// const corsOptions = {
//    origin:'*',
//    credentials: true,            //access-control-allow-credentials:true
//    optionSuccessStatus: 200,
// }

// app.use(cors(corsOptions));

// app.use(express.static(path.resolve(__dirname, 'static')));

// app.use(express.json());
// app.use(bodyParser.json()); // is it necessary?
// app.use(express.urlencoded( {extended: false} ));

// app.use(configRoutes);
// app.use(calcRoutes);

// app.get(dirName.rootDir, (req, res) => {
//   res.send('<h1>Server for calculation was started</h1><br />Sent your request on /calc')
// }); // how add here link to my front Calculator?  -- question to you

// // app.use((err, req, res, next) => {
// //     if (err instanceof CustomError) {

// //     }
// //     res.status(500).json({message: err.message});
// // });

// app.use(badRequest);

// app.listen(PORT, () => {
//   console.log(`Server was run on port ${PORT} ...`);
// });
