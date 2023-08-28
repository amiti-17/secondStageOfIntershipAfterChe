import StorageType from "./StorageType";

export default interface FetchedHistoryType {
  history: StorageType[],
  length: number
}