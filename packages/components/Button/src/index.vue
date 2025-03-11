<script setup lang="ts">
import { ref } from 'vue';
import './style';
import type { ButtonProps, ButtonSlots } from '../types';

const name = 'AceButton';

defineOptions({ name });

withDefaults(defineProps<ButtonProps>(), { nativeType: 'button' });

defineSlots<ButtonSlots>();

const _ref = ref<HTMLButtonElement | null>(null);
defineExpose({
  ref: _ref,
});
</script>

<template>
  <button
    ref="_ref"
    class="ace-button"
    :class="{
      [`ace-button--${type}`]: type,
      [`ace-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>
