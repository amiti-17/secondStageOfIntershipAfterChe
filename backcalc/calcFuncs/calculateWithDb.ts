import calculateExp from ".";
import configDB from "../configDB";
import dbAPI from "../database/dbAPI";
import calculate from "./calculate";


async function calculateWithDb(exp: string) {
  let result;

  try {

    // if this calculation exists
    const storedData = await dbAPI.dataBase.findOne({expression: exp});

    if (storedData) {
        console.log(
            "Data was not calculated - it has been taken from database",
            storedData
        );
        return storedData.calculated;
    }

    // if don`t
    result = calculate(exp);

    return (await dbAPI.dataBase.create({
        expression: exp,
        calculated: result,
    })).calculated;

  } catch (error) {
    console.error("some went wrong with db. " + (error instanceof Error ? error.message : ""));
  }

  // if db has been fallen, or not connected
  result = calculate(exp);
  
  return result;
}

export default calculateWithDb;