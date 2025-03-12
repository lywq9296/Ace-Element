import { default as Collapse } from './src/index.vue';
import { default as CollapseItem } from './src/item.vue';

import { withInstall } from '@Ace-Element/utils';

export const AceCollapse = withInstall(Collapse);
export const AceCollapseItem = withInstall(CollapseItem);
