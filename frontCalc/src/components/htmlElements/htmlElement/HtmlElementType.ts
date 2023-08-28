export default interface HtmlElementType {
  element: HTMLElement | null;
  clearHTML(): void;
  clear(): void;
  setHTML(html: string): void;
  setClass(className: string): void;
  isClassExist(className: string): boolean;
  removeClass(className: string): void;
}