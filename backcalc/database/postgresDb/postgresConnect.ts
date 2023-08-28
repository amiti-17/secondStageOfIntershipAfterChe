import { Pool } from "pg";
import postgresConfig from "../../configDB/postgresConfig";
import configDB from "../../configDB";
import setAppMode from "../setAppMode";

// let pool;

async function postgresConnect(): Promise<Pool | undefined> {
  try {
    const pool = new Pool(postgresConfig);
    console.log(await pool.query("CREATE TABLE mycalcexp(_id SERIAL PRIMARY KEY, expression VARCHAR(100), calcExp VARCHAR(100))"));
    console.log("Successfully connected to the postgres database");
    setAppMode(configDB.postgres);
    return pool;
  } catch (error) {
    if (error instanceof Error && (error as any).code === "42P07") {
      // console.log(error.message, "this")
      console.log("Successfully connected to the postgres database");
      console.log("Table already exists");
      setAppMode(configDB.postgres);
      return new Pool(postgresConfig);
    } else {
      console.error(error);
      setAppMode(configDB.postgres, false);
    }
  }
}

export default postgresConnect;