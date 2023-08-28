import CustomError from "../../configCommon/Errors";
import errorMsg from "../../configCommon/Errors/errorMsg";
import postgresConfig from "../../configDB/postgresConfig";
import DataBaseType from "../Types/DateBaseType";
import PaginationAnswerType from "../PaginationAnswerType";
import HistoryType from "../Types/HistoryType";
import { Pool } from "pg";
import DeletedType from "../mongoDb/DeletedType";

class PostgresDb {
  pool: Pool;
  constructor(databasePool: Pool) {
    this.pool = databasePool;
  };
  create = async (data: HistoryType): Promise<HistoryType> => {
    try {
      if (!data.expression) throw new CustomError(errorMsg.database + ", something wrong with incoming data in postgres create...")
      await this.pool.query("INSERT INTO mycalcexp(expression, calcExp, _id) VALUES ($1, $2, $3)", [data.expression, data.calculated, new Date().getTime()]);
      const myAnswer = await this.findOne({expression: data.expression});
      if (!myAnswer) throw new CustomError(errorMsg.database + ", something wrong with this.findOne() postgres create...")
      console.log("", myAnswer);
      console.log(`db: Data was write: ${myAnswer.expression}, ${myAnswer.calculated}`);
      return myAnswer;
    } catch (error) {
      console.error(error);
      throw new CustomError(errorMsg.database + ", something wrong in postgres create...")
    }
  };
  findOne = async (fieldToSearch: { [prop: string]: string; }): Promise<HistoryType | null> => {
    console.log(Object.keys(fieldToSearch)[0], fieldToSearch[Object.keys(fieldToSearch)[0]])
    try {
      const myAnswer = await this.pool.query("SELECT * FROM mycalcexp WHERE expression=$1", [fieldToSearch["expression"]]);
      
      // console.log("some", myAnswer.command);
      // console.log("fields", myAnswer.fields);
      // console.log("oid", myAnswer.oid);
      // console.log("rowCount", myAnswer.rowCount);
      // console.log("rows", myAnswer.rows);
      // console.log(myAnswer);
      console.log(`db: Data was read by field: ${Object.keys(fieldToSearch).map(el => [el, fieldToSearch[el]])}, and it's value: `, myAnswer.rows);
      
      return myAnswer.rows.slice(-1)[0];
    } catch (error) {
      console.error(error);
      throw new CustomError(errorMsg.database + ", something wrong in postgres findOne...")
    }
  };
  listAll = async (): Promise<HistoryType[]> => {
    try {
      const myAnswer = await this.pool.query("SELECT * FROM mycalcexp");
      console.log(`db: All data was read: `, myAnswer.rows); // fixMe
      return myAnswer.rows;
    } catch (error) {
      console.error(error);
      throw new CustomError(errorMsg.database + ", something wrong in postgres listAll...");
    }
  };
  list = async (offset: number, limit: number): Promise<PaginationAnswerType> => {
    console.log(offset, limit)
    const myCount = Number((await this.pool.query("SELECT COUNT(_id) FROM mycalcexp")).rows[0].count);
    console.log(myCount, "count")
    if (!isNaN(offset) && ! isNaN(limit) && limit) {

      try {
        const myResponse = {
          history: (await this.pool.query("SELECT * FROM mycalcexp ORDER BY _id DESC OFFSET $1 FETCH FIRST $2 ROWS ONLY", [offset, limit])).rows,
          length: myCount,
        }

        console.log("DB pagination: ", myResponse);

        return myResponse;
         
      } catch(e) {
        console.error(`${e}. ` + errorMsg.database);
        throw new CustomError(`${e}. ` + errorMsg.database);
      };

    } else {
      console.error(`${errorMsg.database}. list() in mongoDB`);
      throw new CustomError(errorMsg.database + ", incorrect offset or limit");
    }
    return {} as PaginationAnswerType;
  };
  deleteOne = async (fieldToDelete: { [prop: string]: string; }): Promise<HistoryType | null> => {
    try {
      const currentObject = await this.findOne(fieldToDelete);
      const myAnswer = await this.pool.query("DELETE FROM mycalcexp WHERE expression=$1 AND calcExp=$2", [fieldToDelete.expression, fieldToDelete.calcExp]);
      // console.log(`db: Data was delete:`, myAnswer);
      console.log(`db: Data was delete by field: ${Object.keys(fieldToDelete).map(el => [el, fieldToDelete[el]])}, and it's: ${fieldToDelete.expression}: ${fieldToDelete.calcExp} `);
      return currentObject;
    } catch (error) {
      console.error(error);
      throw new CustomError(errorMsg.database + ", something wrong in postgres listAll...")
    }
  };
  deleteAll = async function (): Promise<DeletedType | null> {
    return {} as DeletedType;
  };
}

// const myPostgresDb: DataBaseType = {
//   create: async function (data: HistoryType): Promise<HistoryType> {
//     try {
//       if (!data.expression) throw new CustomError(errorMsg.database + ", something wrong with incoming data in postgres create...")
//       await pool.query("INSERT INTO mycalcexp(expression, calcExp, _id) VALUES ($1, $2, $3)", [data.expression, data.calculated, new Date().getTime()]);
//       const myAnswer = await this.findOne({expression: data.expression});
//       if (!myAnswer) throw new CustomError(errorMsg.database + ", something wrong with this.findOne() postgres create...")
//       console.log("", myAnswer);
//       console.log(`db: Data was write: ${myAnswer.expression}, ${myAnswer.calculated}`);
//       return myAnswer;
//     } catch (error) {
//       console.error(error);
//       throw new CustomError(errorMsg.database + ", something wrong in postgres create...")
//     }
//   },
//   findOne: async function findOneByExpression(fieldToSearch: { [prop: string]: string; }): Promise<HistoryType | null> {
//     console.log(Object.keys(fieldToSearch)[0], fieldToSearch[Object.keys(fieldToSearch)[0]])
//     try {
//       const myAnswer = await pool.query("SELECT * FROM mycalcexp WHERE expression=$1", [fieldToSearch["expression"]]);
      
//       // console.log("some", myAnswer.command);
//       // console.log("fields", myAnswer.fields);
//       // console.log("oid", myAnswer.oid);
//       // console.log("rowCount", myAnswer.rowCount);
//       // console.log("rows", myAnswer.rows);
//       // console.log(myAnswer);
//       console.log(`db: Data was read by field: ${Object.keys(fieldToSearch).map(el => [el, fieldToSearch[el]])}, and it's value: `, myAnswer.rows);
      
//       return myAnswer.rows.slice(-1)[0];
//     } catch (error) {
//       console.error(error);
//       throw new CustomError(errorMsg.database + ", something wrong in postgres findOne...")
//     }
    
//   },
//   listAll: async function (): Promise<HistoryType[]> {
//     try {
//       const myAnswer = await pool.query("SELECT * FROM mycalcexp");
//       console.log(`db: All data was read: `, myAnswer.rows); // fixMe
//       return myAnswer.rows;
//     } catch (error) {
//       console.error(error);
//       throw new CustomError(errorMsg.database + ", something wrong in postgres listAll...");
//     }
//   },
//   list: async function (offset: number, limit: number): Promise<PaginationAnswerType> {
//     console.log(offset, limit)
//     const myCount = Number((await pool.query("SELECT COUNT(_id) FROM mycalcexp")).rows[0].count);
//     console.log(myCount, "count")
//     if (!isNaN(offset) && ! isNaN(limit) && limit) {

//       try {
//         const myResponse = {
//           history: (await pool.query("SELECT * FROM mycalcexp ORDER BY _id DESC OFFSET $1 FETCH FIRST $2 ROWS ONLY", [offset, limit])).rows,
//           length: myCount,
//         }

//         console.log("DB pagination: ", myResponse);

//         return myResponse;
         
//       } catch(e) {
//         console.error(`${e}. ` + errorMsg.database);
//         throw new CustomError(`${e}. ` + errorMsg.database);
//       };

//     } else {
//       console.error(`${errorMsg.database}. list() in mongoDB`);
//       throw new CustomError(errorMsg.database + ", incorrect offset or limit");
//     }
//     return {} as PaginationAnswerType;
//   },
//   deleteOne: async function (fieldToDelete: { [prop: string]: string; }): Promise<HistoryType | null> {
//     try {
//       const currentObject = await this.findOne(fieldToDelete);
//       const myAnswer = await pool.query("DELETE FROM mycalcexp WHERE expression=$1 AND calcExp=$2", [fieldToDelete.expression, fieldToDelete.calcExp]);
//       console.log(`db: Data was delete:`, myAnswer);
//       console.log(`db: Data was delete by field: ${Object.keys(fieldToDelete).map(el => [el, fieldToDelete[el]])}, and it's: ${fieldToDelete.expression}: ${fieldToDelete.calcExp} `);
//       return currentObject;
//     } catch (error) {
//       console.error(error);
//       throw new CustomError(errorMsg.database + ", something wrong in postgres listAll...")
//     }
//   },
//   deleteAll: async function (): Promise<DeletedType | null> {
//     return {} as DeletedType;
//   }
// }

export default PostgresDb;