import type { InjectionKey, Ref } from 'vue';

export type CollapseNameType = string | number;

export interface CollapseProps {
  modelValue: CollapseNameType[];
  accordion?: boolean;
}

export interface CollapseEmits {
  (e: 'update:modelValue', values: CollapseNameType[]): void;
  (e: 'change', values: CollapseNameType[]): void;
}

export interface CollapseItemProps {
  name: CollapseNameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseContext {
  activeNames: Ref<CollapseNameType[]>;
  handleItemClick: (name: CollapseNameType) => void;
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol('collapseContextKey');
