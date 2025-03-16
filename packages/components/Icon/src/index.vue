<script setup lang="ts">
import type { AceIconProps } from '../types';
import { FontAwesomeIcon } from '@Ace-Element/icon';
import omit from 'lodash.omit';
import { computed } from 'vue';

defineOptions({
  name: 'AceIcon',
  inheritAttrs: false,
});

const props = defineProps<AceIconProps>();

// 过滤掉自定义的 type 和 color 属性
const filteredProps = computed(() => omit(props, ['type', 'color']));

const customStyles = computed(() => {
  return props.color ? { color: props.color } : {};
});
</script>

<template>
  <i
    :class="{
      'ace-icon': true,
      [`ace-icon--${props.type}`]: props.type,
    }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <FontAwesomeIcon v-bind="filteredProps" />
  </i>
</template>
