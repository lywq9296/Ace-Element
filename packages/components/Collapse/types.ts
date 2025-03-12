import type { InjectionKey, Ref } from 'vue';

export type CollapseNameType = string | number;

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
