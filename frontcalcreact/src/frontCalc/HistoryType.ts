export default interface HistoryType {
  [index: number]: {
    [key: string]: string
  },
  length: number
}