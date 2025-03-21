export type AlertType = 'success' | 'warning' | 'danger' | 'info';

export interface AlertProps {
  content?: string;
  type: AlertType;
  effect?: 'light' | 'dark';
  closable?: boolean;
}

export interface AlertEmits {
  (e: 'close', visible: boolean): void;
}

export interface AlertInstance {
  hide: () => void;
}
