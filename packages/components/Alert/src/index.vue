<script setup lang="ts">
import { ref } from 'vue';
import { AceIcon } from '../../Icon';
import type { AlertEmits, AlertProps } from '../types';

const visible = ref(true);
const hideAlert = () => {
  visible.value = false;
  emits('close', visible.value);
};

defineOptions({ name: 'AceAlert' });

withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  closable: true,
  effect: 'light',
});

const emits = defineEmits<AlertEmits>();

defineExpose({ hide: () => hideAlert() });
</script>

<template>
  <Transition name="ace-alert">
    <div
      v-if="visible"
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
        <AceIcon icon="xmark" @click="visible = false" />
      </div>
    </div>
  </Transition>
</template>
