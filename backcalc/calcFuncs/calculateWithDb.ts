import calculateExp from ".";
import configDB from "../configDB";
import dbAPI from "../database/dbAPI";
import calculate from "./calculate";


async function calculateWithDb(exp: string) {
  let result;

  try {

    // if this calculation exists
    let resultObj = await dbAPI.dataBase.findOne({expression: exp});

    if (resultObj) {
        console.log(
            "Data was not calculated - it has been taken from database",
            resultObj
        );
        delete resultObj._id;
        delete resultObj.created_at;
    } else {
      resultObj = {
        expression: exp,
        calculated: calculate(exp),
      }
    }

    return (await dbAPI.dataBase.create(resultObj)).calculated;

  } catch (error) {
    console.error("some went wrong with db. " + (error instanceof Error ? error.message : ""));
  }

  // if db has been fallen, or not connected
  result = calculate(exp);
  
  return result;
}

export default calculateWithDb;