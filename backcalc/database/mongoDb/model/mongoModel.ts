import mongoose from "mongoose";
import calcSchema from "../schema/mongoSchema";

const CalcModel = mongoose.model("calc", calcSchema);

export default CalcModel;
