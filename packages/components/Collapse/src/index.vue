<script setup lang="ts">
import { provide, ref } from 'vue';
import { collapseContextKey, type CollapseNameType } from '../types';

defineOptions({
  name: 'AceCollapse',
});

const activeNames = ref<CollapseNameType[]>([]);

const handleItemClick = (name: CollapseNameType) => {
  const itemIndex = activeNames.value.indexOf(name);
  if (itemIndex > -1) {
    activeNames.value.splice(itemIndex, 1);
  } else {
    activeNames.value.push(name);
  }
};

// 向子组件传递数据和函数
provide(collapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>

<template>
  <div class="ace-collapse">
    <slot />
  </div>
</template>
