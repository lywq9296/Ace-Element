<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { IButton } from '@Vue3-Element/components';
import type { ButtonInstance } from '@Vue3-Element/components/Button/types';

const buttonRef = ref<ButtonInstance | null>(null);

onMounted(() => {
  console.log(buttonRef.value?.ref);
});
</script>

<template>
  <div>
    <IButton type="primary" plain ref="buttonRef">Button</IButton>
    <IButton type="primary">Primary Button</IButton>
    <IButton type="success">Success Button</IButton>
    <IButton type="info">Info Button</IButton>
    <IButton type="info" disabled>Info Button</IButton>
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
