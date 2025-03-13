<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import { collapseContextKey } from '../types';
import type { CollapseEmits, CollapseNameType, CollapseProps } from '../types';

defineOptions({
  name: 'AceCollapse',
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();

watch(
  () => props.modelValue,
  (newModelValue) => {
    activeNames.value = newModelValue;
  }
);

const activeNames = ref<CollapseNameType[]>(props.modelValue);

if (props.accordion && activeNames.value.length > 1) {
  console.warn('according mode should only have one active item');
}

const handleItemClick = (name: CollapseNameType) => {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === name ? '' : name];
  } else {
    const itemIndex = activeNames.value.indexOf(name);
    if (itemIndex > -1) {
      activeNames.value.splice(itemIndex, 1);
    } else {
      activeNames.value.push(name);
    }
  }

  emits('update:modelValue', activeNames.value);
  emits('change', activeNames.value);
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
