import { Schema } from "mongoose";
import schemaObj from "../../schemaObj";

const calcSchema = new Schema(schemaObj, {
  timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
});

export default calcSchema;
