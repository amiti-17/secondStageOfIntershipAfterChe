import DataBaseType from "../Types/DateBaseType";
import ListType from "../Types/PaginationAnswerType";
import HistoryType from "../Types/HistoryType";
import DeletedType from "../Types/DeletedType";

const defaultDBObj: DataBaseType = {
  create: function (data: HistoryType): Promise<HistoryType> {
    throw new Error("Function not implemented.");
  },
  findOne: function (fieldToSearch: { [prop: string]: string; }): Promise<HistoryType | null> {
    throw new Error("Function not implemented.");
  },
  listAll: function (): Promise<HistoryType[]> {
    throw new Error("Function not implemented.");
  },
  list: function (offset: number, limit: number): Promise<ListType> {
    throw new Error("Function not implemented.");
  },
  delete: function (fieldToDelete: { [prop: string]: string; }): Promise<HistoryType | null> {
    throw new Error("Function not implemented.");
  },
  deleteAll: function (): Promise<DeletedType | null> {
    throw new Error("Function not implemented.");
  }
}

export default defaultDBObj;