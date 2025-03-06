<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import useMousePosition from './composables/useMousePosition';
import useURLLoader from './composables/useURLLoader';

export default defineComponent({
	components: { HelloWorld },
	setup() {
		/* const x = ref(0);
		const y = ref(0);

		const updateMouse = (e: MouseEvent) => {
			x.value = e.pageX;
			y.value = e.pageY;
		};

		onMounted(() => {
			document.addEventListener('click', updateMouse);
		});
		onUnmounted(() => {
			document.removeEventListener('click', updateMouse);
		}); */
		const { x, y } = useMousePosition();
		const data = useURLLoader('https://dog.ceo/api/breeds/image/random');

		return { x, y, data };
	}
});
</script>

<template>
	<div>
		<div>
			<h1 v-if="data.loading">Loading...</h1>
			<img v-else :src="data.result?.message" width="50%" alt="" />
		</div>
		<a href="https://vite.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />

	<div>
		<p>Client Position</p>
		<p>X:{{ x }}, Y:{{ y }}</p>
	</div>
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
