<script setup lang="ts">
import { ref } from 'vue';
import './style';
import { AceIcon } from '../../Icon';
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
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <AceIcon v-if="loading" icon="spinner" spin />
    <AceIcon v-if="icon" :icon="icon" />
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>
