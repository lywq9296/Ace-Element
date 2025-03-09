// import type { PropType } from 'vue';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'large' | 'small';

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  disabled?: boolean;
  circle?: boolean;
}

export interface ButtonSlots {
  default: (props: any) => Element;
}

// 类型标注的方式定义 props 类型
// export const buttonProps = {
//   type: {
//     type: String as PropType<ButtonType>,
//   },
//   size: {
//     type: String as PropType<ButtonSize>,
//   },
//   plain: {
//     type: Boolean,
//   },
//   round: {
//     type: Boolean,
//   },
//   disabled: {
//     type: Boolean,
//   },
//   circle: {
//     type: Boolean,
//   },
// };
