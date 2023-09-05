import calculateExp from ".";
import configDB from "../configDB";
import dbAPI from "../database/dbAPI";
import calculate from "./calculate";


async function calculateWithDb(exp: string): Promise<string> {
  let result;

  try {

    // if this calculation exists
    const resultObj = await dbAPI.dataBase.findOne({expression: exp});

    if (resultObj) {
      console.log(
        "Data was not calculated - it has been taken from database",
        resultObj
      );
      result = {
        expression: resultObj.expression,
        calculated: resultObj.calculated
      }
    } else {
      result = {
        expression: exp,
        calculated: calculate(exp),
      }
    }

    return (await dbAPI.dataBase.create(result)).calculated || "";

  } catch (error) {
    console.error("some went wrong with db. " + (error instanceof Error ? error.message : ""));
  }

  // if db has been fallen, or not connected
  result = calculate(exp);
  
  return result;
}

export default calculateWithDb;