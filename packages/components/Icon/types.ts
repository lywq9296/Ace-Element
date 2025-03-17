import type { FontAwesomeIconProps } from '@Ace-Element/icon';
import type { BaseType } from '../types';

export interface AceIconProps extends FontAwesomeIconProps {
  type?: BaseType;
  color?: string;
}
