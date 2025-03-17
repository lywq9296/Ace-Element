export interface Install<T> {
  (app: T): void;
  installed: boolean;
}

export type BaseType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
