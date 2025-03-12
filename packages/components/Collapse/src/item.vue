<script setup lang="ts">
import { computed, inject } from 'vue';
import { collapseContextKey, type CollapseItemProps } from '../types';
defineOptions({
  name: 'AceCollapseItem',
});

const props = defineProps<CollapseItemProps>();

// 接收父组件传递的数据和函数
const collapseContext = inject(collapseContextKey);

const isCurrentActive = computed(() =>
  collapseContext?.activeNames.value.includes(props.name)
);
const handleClick = () => {
  if (props.disabled) {
    return;
  }

  collapseContext?.handleItemClick(props.name);
};
</script>

<template>
  <div
    :class="{
      'ace-collapse-item': true,
      'is-disabled': disabled,
    }"
  >
    <div
      :id="`item_header_${name}`"
      class="ace-collapse-item__header"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <div
      :id="`item_content_${name}`"
      class="ace-collapse-item__content"
      v-show="isCurrentActive"
    >
      <slot />
    </div>
  </div>
</template>
