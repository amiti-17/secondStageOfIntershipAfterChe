import PaginationAnswerType from "./PaginationAnswerType";
import HistoryType from "./HistoryType";
import DeletedType from "./DeletedType";
import mongoose from "mongoose";
import { Pool } from "pg";
import { Knex } from "knex";

export default interface RawDateBaseType {
  create: (data: HistoryType) => Promise<HistoryType>;
  findOne: (fieldToSearch: {[prop: string]: string}) => Promise<HistoryType | null>;
  listAll: () => Promise<HistoryType[]>;
  list: (offset: number, limit: number) => Promise<HistoryType[]>;
  delete: (fieldToDelete: {[prop: string]: string}) => Promise<HistoryType | null>;
  deleteAll: () => Promise<DeletedType | null>;
  countAll: () => Promise<number>;
  CalcModel?: mongoose.Model<HistoryType>;
  pool?: Pool;
  knex?: Knex<HistoryType, unknown[]>;
}
