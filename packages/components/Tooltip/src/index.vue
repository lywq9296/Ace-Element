<script setup lang="ts">
import { ref, watch } from 'vue';
import type { TooltipProps, TooltipEmits } from '../types';
import { createPopper } from '@popperjs/core';
import type { Instance } from '@popperjs/core';

defineOptions({
  name: 'AceTooltip',
});

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
});

const emits = defineEmits<TooltipEmits>();

const isOpen = ref(false);
const popperNodeRef = ref<HTMLElement>();
const triggerNodeRef = ref<HTMLElement>();
let popperInstance: Instance | null = null;

const togglePopper = () => {
  isOpen.value = !isOpen.value;

  emits('visible-change', isOpen.value);
};

watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      if (popperNodeRef.value && triggerNodeRef.value) {
        popperInstance = createPopper(
          triggerNodeRef.value,
          popperNodeRef.value,
          {
            placement: props.placement,
          }
        );
      } else {
        popperInstance?.destroy();
      }
    }
  },
  {
    flush: 'post', // dom 已经更新
  }
);
</script>

<template>
  <div class="ace-tooltip">
    <div
      ref="triggerNodeRef"
      @click="togglePopper"
      class="ace-tooltip__trigger"
    >
      <slot />
    </div>
    <div ref="popperNodeRef" v-if="isOpen" class="ace-tooltip__popper">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>
