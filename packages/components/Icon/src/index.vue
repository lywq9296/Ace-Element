<script setup lang="ts">
import type { AceIconProps } from '../types';
import { FontAwesomeIcon } from '@Ace-Element/icon';

defineOptions({
  name: 'AceIcon',
  inheritAttrs: false,
});

defineProps<AceIconProps>();
</script>

<template>
  <i class="ace-icon"> <FontAwesomeIcon v-bind="$props" /> </i>
</template>
