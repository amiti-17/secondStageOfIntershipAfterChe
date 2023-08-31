import { Schema } from "mongoose";

const schemaObj = {
  expression: { type: String, required: true },
  calculated: { type: String, required: true },
  created_at: { type: Date, required: true, default: Date.now },
  _id: { type: Schema.Types.ObjectId, required: true },
}

export default schemaObj;