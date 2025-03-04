<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue';

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

export default defineComponent({
	name: 'App',
	setup() {
		const count = ref<number | string>(0);
		const user = reactive<User>({
			firstName: 'John',
			lastName: 'Doe',
			age: 7
		});
		const buttonStatus = computed<{ text: string; disabled: boolean }>(() => {
			return {
				text: user.age >= 10 ? '可以参加' : '未满 10 岁不可已参加',
				disabled: user.age < 10
			};
		});

		const increase = () => {
			if (typeof count.value === 'number') {
				count.value++;
			}

			user.age++;
		};

		return {
			count,
			increase,
			user,
			buttonStatus
		};
	}
});
</script>

<template>
	<div>
		<div>
			<h1>{{ count }}, {{ user.age }}</h1>
			<button type="button" @click="increase">Increase</button>
			<button type="button" :disabled="buttonStatus.disabled" @click="increase">
				{{ buttonStatus.text }}
			</button>
		</div>
		<a href="https://vite.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
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
