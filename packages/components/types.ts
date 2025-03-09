export interface Install<T> {
  (app: T): void;
  installed: boolean;
}
