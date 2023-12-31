import RawDateBaseType from "./Types/RawDateBaseType";
import HistoryType from "./Types/HistoryType";
import DeletedType from "./Types/DeletedType";
import PaginationAnswerType from "./Types/PaginationAnswerType";

export default class NormalizeDb {
  rawDataBase: RawDateBaseType;
  create: (data: HistoryType) => Promise<HistoryType>;
  findOne: (fieldToSearch: {[prop: string]: string}) => Promise<HistoryType | null>;
  listAll: () => Promise<HistoryType[]>;
  list: (offset: number, limit: number) => Promise<PaginationAnswerType>;
  delete: (fieldToDelete: {[prop: string]: string}) => Promise<HistoryType | null>;
  deleteAll: () => Promise<DeletedType | null>;
  // countAll: () => Promise<Number>;
  constructor(rawDataBase: RawDateBaseType) {
    this.rawDataBase = rawDataBase;
    this.listAll = rawDataBase.listAll;
    this.delete = rawDataBase.delete;
    this.deleteAll = rawDataBase.deleteAll;
    this.findOne = rawDataBase.findOne;
    this.create = rawDataBase.create;
    // this.countAll = rawDataBase.countAll;
    this.list = async function(offset: number, limit: number) {
      const length = await rawDataBase.countAll();
      const returnedData: PaginationAnswerType = {
        history: await rawDataBase.list(offset, limit),
        length: length >= 15 ? 15 : length,
      }
      return returnedData;
    }; rawDataBase.list;
  }
}