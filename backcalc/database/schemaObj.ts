import { Schema } from "mongoose";

const schemaObj = {
  expression: { type: String, required: true },
  calculated: { type: String, required: true },
}

export default schemaObj;