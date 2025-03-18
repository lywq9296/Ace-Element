<script setup lang="ts">
import { AceIcon } from '../../Icon';
import type { AlertProps } from '../types';

defineOptions({ name: 'AceAlert' });

withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  closable: true,
  effect: 'light',
});
</script>

<template>
  <div
    :class="{
      'ace-alert': true,
      [`ace-alert__${type}`]: type,
      [`ace-alert__${effect}`]: effect,
    }"
  >
    <div class="ace-alert__content">
      {{ content }}
      <span>
        <slot />
      </span>
    </div>
    <div class="ace-alert__close" v-if="closable">
      <AceIcon icon="xmark" />
    </div>
  </div>
</template>
