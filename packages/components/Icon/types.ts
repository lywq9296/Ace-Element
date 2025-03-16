import type { FontAwesomeIconProps } from '@Ace-Element/icon';

export interface AceIconProps extends FontAwesomeIconProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  color?: string;
}
