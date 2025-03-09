<script setup lang="ts">
import type { ButtonProps, ButtonSlots } from '../types';

defineProps<ButtonProps>();

defineSlots<ButtonSlots>();

defineOptions({ name: 'IButton' });
</script>

<template>
  <button
    class="i-button"
    :class="{
      [`i-button--${type}`]: type,
      [`i-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
  >
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>
