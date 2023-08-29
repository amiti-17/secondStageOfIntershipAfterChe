import PaginationAnswerType from "./PaginationAnswerType";
import HistoryType from "./HistoryType";
import DeletedType from "../mongoDb/DeletedType";
import mongoose from "mongoose";
import { Pool } from "pg";

export default interface RawDateBaseType {
  create: (data: HistoryType) => Promise<HistoryType>;
  findOne: (fieldToSearch: {[prop: string]: string}) => Promise<HistoryType | null>;
  listAll: () => Promise<HistoryType[]>;
  list: (offset: number, limit: number) => Promise<HistoryType[]>;
  deleteOne: (fieldToDelete: {[prop: string]: string}) => Promise<HistoryType | null>;
  deleteAll: () => Promise<DeletedType | null>;
  countAll: () => Promise<number>;
  CalcModel?: mongoose.Model<HistoryType>;
  pool?: Pool;
}
