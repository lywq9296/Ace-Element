<script setup lang="ts">
import type { CollapseItemProps } from '../types';
defineOptions({
  name: 'AceCollapseItem',
});

defineProps<CollapseItemProps>();
</script>

<template>
  <div
    :class="{
      'ace-collapse-item': true,
      'is-disabled': disabled,
    }"
  >
    <div :id="`item_header_${name}`" class="ace-collapse-item__header">
      <slot name="title">{{ title }}</slot>
    </div>
    <div :id="`item_content_${name}`" class="ace-collapse-item__content">
      <slot />
    </div>
  </div>
</template>
