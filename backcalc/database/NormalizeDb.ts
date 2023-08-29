import RawDateBaseType from "./Types/RawDateBaseType";
import HistoryType from "./Types/HistoryType";
import DeletedType from "./mongoDb/DeletedType";
import PaginationAnswerType from "./Types/PaginationAnswerType";

export default class NormalizeDb {
  rawDataBase: RawDateBaseType;
  create: (data: HistoryType) => Promise<HistoryType>;
  findOne: (fieldToSearch: {[prop: string]: string}) => Promise<HistoryType | null>;
  listAll: () => Promise<HistoryType[]>;
  list: (offset: number, limit: number) => Promise<PaginationAnswerType>;
  deleteOne: (fieldToDelete: {[prop: string]: string}) => Promise<HistoryType | null>;
  deleteAll: () => Promise<DeletedType | null>;
  // countAll: () => Promise<Number>;
  constructor(rawDataBase: RawDateBaseType) {
    this.rawDataBase = rawDataBase;
    this.listAll = rawDataBase.listAll;
    this.deleteOne = rawDataBase.deleteOne;
    this.deleteAll = rawDataBase.deleteAll;
    this.findOne = rawDataBase.findOne;
    this.create = rawDataBase.create;
    // this.countAll = rawDataBase.countAll;
    this.list = async function(offset: number, limit: number) {
      const returnedData: PaginationAnswerType = {
        history: await rawDataBase.list(offset, limit),
        length: await rawDataBase.countAll(),
      }
      return returnedData;
    }; rawDataBase.list;
  }
}