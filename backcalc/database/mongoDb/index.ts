import CustomError from "../../configCommon/Errors";
import errorMsg from "../../configCommon/Errors/errorMsg";
import HistoryType from "../Types/HistoryType";
import DeletedType from "../Types/DeletedType";
import mongoose from "mongoose";
import calcSchema from "./schema/mongoSchema";
import RawDateBaseType from "../Types/RawDateBaseType";

class MongoDb implements RawDateBaseType {
  CalcModel: mongoose.Model<HistoryType>
  constructor(db: typeof mongoose) {
    const CalcModel = db.model("calc", calcSchema);
    this.CalcModel = CalcModel as unknown as mongoose.Model<HistoryType>; // Problem in types...
  };
  create = async (data: HistoryType): Promise<HistoryType> => {
    const newData = new this.CalcModel(data);
    const savedValue = await newData.save(); // how I can spot that some going wrong?

    console.log(`db: Data was write: ${data.expression}, ${data.calculated}`);

    return savedValue;
  };

  findOne = async (filter: {[prop: string]: string}): Promise<HistoryType | null> => {

    let myObjData: HistoryType | null;

    try {
      myObjData = await this.CalcModel.findOne(filter);
    } catch(e) {
      throw new CustomError(`${e}. ` + errorMsg.database);
    };

    console.log(`db: Data was read by field: ${Object.keys(filter).join(", ")}, and it's value: ${myObjData}`);

    return myObjData;
  };

  delete = async (filter: {[prop: string]: string}): Promise<HistoryType | null> => {
    const myDeletedObj =  await this.findOne(filter);
    const deletedReportObj = await this.CalcModel.deleteOne(filter);
    console.log(`db: Data was delete by field: ${Object.keys(filter).map(el => [el, filter[el]]).join(", ")}, and it's: ${myDeletedObj?.expression}: ${myDeletedObj?.calculated} `);
    return deletedReportObj.deletedCount ? myDeletedObj : null;
  };
  
  deleteAll = async (): Promise<DeletedType | null> => {
  const deletedReport = await this.CalcModel.deleteMany({expression: /.*/});
    console.log(`db: All data was delete: `, deletedReport);
    return deletedReport;
  };

  listAll = async (): Promise<HistoryType[]> => {

    let myHistory;

    try {
      myHistory = await this.CalcModel.find();
    } catch(e) {
      throw new CustomError(`${e}. ` + errorMsg.database);
    };

    console.log(`mongoDb: All data was read: ${myHistory}`);
    
    return myHistory;
  };

  list = async (offset: number, limit: number): Promise<HistoryType[]> => {
    console.log(offset, limit);

    if (!isNaN(offset) && !isNaN(limit) && limit) {

      try {
        // const result1 = (await this.CalcModel.find().skip(await this.CalcModel.count() - offset - limit).limit(limit)).reverse();
        const result2 = await this.CalcModel.find().sort({'_id': -1 }).skip(offset).limit(limit);
        // console.log("1, ", result1);
        // console.log("2, ", result2);
        return result2
      } catch(e) {
        console.error(`${e}. ` + errorMsg.database);
        throw new CustomError(`${e}. ` + errorMsg.database);
      };

    } else {
      return await this.listAll();
      // console.error(`${errorMsg.database}. list() in mongoDB`);
      // throw new CustomError(errorMsg.database + ", incorrect offset or limit");
    }
    // return myHistory;
  };
  countAll = async (): Promise<number> => {
    return await this.CalcModel.count()
  };
}

// const myMongoDb: DataBaseType = {
//   create: async (data: HistoryType): Promise<HistoryType> => {
//     data._id = new Date().getTime();
//     const newData = new CalcModel(data);
//     const savedValue = await newData.save(); // how I can spot that some going wrong?

//     console.log(`db: Data was write: ${data.expression}, ${data.calculated}`);

//     return savedValue;
//   },

//   findOne: async (fieldToSearch: {[prop: string]: string}): Promise<HistoryType | null> => {

//     let myObjData: HistoryType | null;

//     try {
//       myObjData = await CalcModel.findOne(fieldToSearch);
//     } catch(e) {
//       throw new CustomError(`${e}. ` + errorMsg.database);
//     };

//     console.log(`db: Data was read by field: ${Object.keys(fieldToSearch).join(", ")}, and it's value: ${myObjData}`);

//     return myObjData;
//   },

//   deleteOne: async function (fieldToDelete: {[prop: string]: string}): Promise<HistoryType | null> {
//     const myDeletedObj =  await this.findOne(fieldToDelete);
//     const deletedReportObj = await CalcModel.deleteOne(fieldToDelete);
//     console.log(`db: Data was delete by field: ${Object.keys(fieldToDelete).map(el => [el, fieldToDelete[el]]).join(", ")}, and it's: ${myDeletedObj?.expression}: ${myDeletedObj?.calculated} `);
//     return deletedReportObj.deletedCount ? myDeletedObj : null;
//   },
  
//   deleteAll: async function (): Promise<DeletedType | null> {
//   const deletedReport = await CalcModel.deleteMany({expression: /.*/});
//     console.log(`db: All data was delete: `, deletedReport);
//     return deletedReport;
//   } ,

//   listAll: async (): Promise<HistoryType[]> => {

//     let myHistory;

//     try {
//       myHistory = await CalcModel.find();
//     } catch(e) {
//       throw new CustomError(`${e}. ` + errorMsg.database);
//     };

//     console.log(`db: All data was read: ${myHistory}`);
    
//     return myHistory;
//   },

//   list: async (offset: number, limit: number): Promise<PaginationAnswerType> => {
//     console.log(offset, limit);

//     if (!isNaN(offset) && ! isNaN(limit) && limit) {

//       try {
//         return {
//           history: await CalcModel.find().skip(await CalcModel.count() - offset - limit).limit(limit),
//           length: await CalcModel.count(),
//         }
         
//       } catch(e) {
//         console.error(`${e}. ` + errorMsg.database);
//         throw new CustomError(`${e}. ` + errorMsg.database);
//       };

//     } else {
//       console.error(`${errorMsg.database}. list() in mongoDB`);
//       throw new CustomError(errorMsg.database + ", incorrect offset or limit");
//     }
//     // return myHistory;
//   },

//   // getFromTo: async (from, to) => { // slice("arr", [-(await CalcModel.count() - (to < from ? from : to)), howMuch])
//   //   to = typeof to == "number" && to > from ? to : 0;
//   //   to = to - from === 1 ? 0 : to;
//   //   const myHistory = await CalcModel.find().skip(await CalcModel.count() - (to ? to : from + 1)).limit(to ? to - from : 1).catch(e => {
//   //     // throw new CustomError(`${e}. ` + errorMsg.database);
//   //     console.error(`${e}. ` + errorMsg.database)
//   //   }) || [];

//   //   console.log(`db: Data from ${from} to ${to} was read: ${Array.from(myHistory)}`
//   //   // , {
//   //   //   from, 
//   //   //   to, 
//   //   //   skip: await CalcModel.count() - (to ? to + from -1 : from + 1),
//   //   //   length: await CalcModel.count(),
//   //   //   limit: to ? to - from : 1,
//   //   // }
//   //   );

//   //   const myHistoryArr = Array.from(myHistory)

//   //   return myHistoryArr;
//   // }
// };

export default MongoDb;
