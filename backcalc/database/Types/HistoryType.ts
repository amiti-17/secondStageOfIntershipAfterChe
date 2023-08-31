import { Date, Schema } from "mongoose";

export default interface HistoryType {
    expression?: string,
    calculated?: string,
    _id?: Schema.Types.ObjectId | number,
    created_at?: Date,
    updated_at?: Date,
}
