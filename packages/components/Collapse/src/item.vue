<script setup lang="ts">
import { computed, inject } from 'vue';
import { collapseContextKey, type CollapseItemProps } from '../types';
import { AceIcon } from '../../Icon';

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

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px';
    el.style.opacity = '0';
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.opacity = '1';
  },
  afterEnter(el) {
    el.style.height = '';
    el.style.opacity = '';
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.opacity = '1';
  },
  leave(el) {
    el.style.height = '0px';
    el.style.opacity = '0';
  },
  afterLeave(el) {
    el.style.height = '';
    el.style.opacity = '';
  },
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
      :class="{
        'ace-collapse-item__header': true,
        'is-disabled': disabled,
        'is-active': isCurrentActive,
      }"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <AceIcon icon="angle-right" class="header-angle" />
    </div>
    <Transition name="ace" v-on="transitionEvents">
      <div v-show="isCurrentActive">
        <div :id="`item_content_${name}`" class="ace-collapse-item__content">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>
