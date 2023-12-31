import PaginationAnswerType from "./PaginationAnswerType";
import HistoryType from "./HistoryType";
import DeletedType from "./DeletedType";

export default interface DateBaseType {
    create: (data: HistoryType) => Promise<HistoryType>;
    findOne: (fieldToSearch: {[prop: string]: string}) => Promise<HistoryType | null>;
    listAll: () => Promise<HistoryType[]>;
    list: (offset: number, limit: number) => Promise<PaginationAnswerType>;
    delete: (fieldToDelete: {[prop: string]: string}) => Promise<HistoryType | null>;
    deleteAll: () => Promise<DeletedType | null>;
}
