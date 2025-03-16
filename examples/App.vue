<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import {
  AceButton,
  AceCollapse,
  AceCollapseItem,
  AceIcon,
} from '@Ace-Element/components';
import type { ButtonInstance } from '@Ace-Element/components/Button/types';

const buttonRef = ref<ButtonInstance | null>(null);

const openedValue = ref(['a']);
onMounted(() => {
  console.log(buttonRef.value?.ref);
});
</script>

<template>
  <AceIcon icon="user-secret" />
  <AceIcon icon="arrow-up" size="2xl" spin />
  <div>
    <AceButton ref="buttonRef">Test Button</AceButton>
    <AceButton plain>Plain Button</AceButton>
    <AceButton round>Round Button</AceButton>
    <AceButton circle>VK</AceButton>
    <AceButton disabled>Disabled Button</AceButton><br /><br />
    <AceButton type="primary">Primary</AceButton>
    <AceButton type="success">Success</AceButton>
    <AceButton type="info">Info</AceButton>
    <AceButton type="warning">Warning</AceButton>
    <AceButton type="danger">Danger</AceButton><br /><br />
    <AceButton type="primary" plain>Primary</AceButton>
    <AceButton type="success" plain>Success</AceButton>
    <AceButton type="info" plain>Info</AceButton>
    <AceButton type="warning" plain>Warning</AceButton>
    <AceButton type="danger" plain>Danger</AceButton><br /><br />
    <AceButton size="large">Large</AceButton>
    <AceButton size="small">Small</AceButton>
  </div>
  <AceCollapse v-model="openedValue" accordion>
    <AceCollapseItem name="a" title="Title A">
      <!--  <template #title>
        <h1>nice title</h1>
      </template> -->
      <h1>headline title</h1>
      <div>this is content a aaa</div>
    </AceCollapseItem>
    <AceCollapseItem name="b" title="Title B">
      <div>this is bbbbb test</div>
    </AceCollapseItem>
    <AceCollapseItem name="c" title="Disabled Title" disabled>
      <div>this is cccc test</div>
    </AceCollapseItem>
  </AceCollapse>
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
