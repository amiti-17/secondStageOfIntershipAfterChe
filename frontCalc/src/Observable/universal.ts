import CustomError from "../config/Errors";
import InputElementType from "../components/htmlInputElements/inputElement/InputElementType";

interface ObservableType {
  [key: string]: any[];
}

const tempObserve: ObservableType = {};

const Observable = {
  observers: tempObserve,
 
  unsubscribe(eventType: string, func: (data: string) => void) {
    if (!this.observers[eventType]) throw new CustomError(`No ${eventType} in this observable`);
    this.observers[eventType] = this.observers[eventType].filter((observer: any) => observer !== func);
  },
 
  subscribe(eventType: string, func: (data: string) => void) {
    if (!this.observers[eventType]) this.observers[eventType] = [];
    this.observers[eventType].push(func);
  },
 
  notifyAll(eventType: string, data: string) {
    this.observers[eventType].forEach((observer: (data: string) => void) => observer(data));
  },
}

export default Observable;