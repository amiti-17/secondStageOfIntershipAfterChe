import { Pool } from "pg";
import postgresConfig from "../../configDB/postgresConfig";
import HistoryType from "../Types/HistoryType";
import knex, { Knex } from "knex";
// import configDB from "../../configDB";
// import setAppMode from "../setAppMode";

// let pool;

async function postgresConnect(): Promise<Knex<HistoryType, unknown[]> | undefined> {
  // knex version...
  try {
    const myKnex = knex<HistoryType>({
      client: 'pg',
      connection: {
        host : process.env.POSTGRES_HOST,
        port : Number(process.env.POSTGRES_PORT),
        user : process.env.POSTGRES_USER,
        password : process.env.POSTGRES_PWD,
        database : process.env.DB,
      }
    }) 
    
    return myKnex;
  } catch (error) {
    console.error(error);
  }
    
  
  // SQL version...
  
  // try {
  //   const pool = new Pool(postgresConfig);
  //   // console.log(await pool.query("CREATE TABLE mycalcexp(_id SERIAL PRIMARY KEY, expression VARCHAR(100), calculated VARCHAR(100))"));
  //   console.log("Successfully connected to the postgres database");
  //   // setAppMode(configDB.postgres);
  //   return pool;
  // } catch (error) {
  //   // if (error instanceof Error && (error as any).code === "42P07") {
  //   //   // console.log(error.message, "this")
  //   //   console.log("Successfully connected to the postgres database");
  //   //   console.log("Table already exists");
  //   //   // setAppMode(configDB.postgres);
  //   //   return new Pool(postgresConfig);
  //   // } else {
  //     console.error(error);
  //     // setAppMode(configDB.postgres, false);
  //   // }
  // }
}

export default postgresConnect;