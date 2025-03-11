<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { AceButton } from '@Ace-Element/components';
import type { ButtonInstance } from '@Ace-Element/components/Button/types';

const buttonRef = ref<ButtonInstance | null>(null);

onMounted(() => {
  console.log(buttonRef.value?.ref);
});
</script>

<template>
  <div>
    <AceButton plain ref="buttonRef">Plain Button</AceButton>
    <AceButton type="primary">Primary Button</AceButton>
    <AceButton type="success">Success Button</AceButton>
    <AceButton type="info">Info Button</AceButton>
    <AceButton type="info" disabled>Info Button</AceButton>
  </div>
  <div>
    <a href="#">the link</a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
