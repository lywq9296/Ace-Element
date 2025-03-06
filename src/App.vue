<script setup lang="ts">
// import { defineComponent } from 'vue';
import { reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import MyProfile from './components/MyProfile.vue';
import useMousePosition from './composables/useMousePosition';
import useURLLoader from './composables/useURLLoader';

interface DogResult {
	message: string;
	status: string;
}

interface TodoResult {
	title: string;
}

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

const user = reactive<User>({
	firstName: 'John',
	lastName: 'Doe',
	age: 18
});

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
const { loading, result } = useURLLoader<DogResult>(
	'https://dog.ceo/api/breeds/image/random'
);
const { loading: todoLoading, result: todoResult } = useURLLoader<TodoResult>(
	'https://jsonplaceholder.typicode.com/todos/1'
);

const onChange = (hidden: boolean) => {
	document.title = hidden ? '年龄被隐藏' : '年龄显示';
};

// export default defineComponent({
// 	components: { HelloWorld },
// 	setup() {
// 		return { x, y, loading, result, todoLoading, todoResult };
// 	}
// });
</script>

<template>
	<div>
		<div>
			<h1 v-if="loading">Loading...</h1>
			<img
				v-if="!loading && result"
				:src="result?.message"
				height="500"
				alt=""
			/>
		</div>
		<div>
			<h1 v-if="todoLoading">Todo Loading...</h1>
			<h1 v-if="!todoLoading && todoResult">{{ todoResult.title }}</h1>
		</div>
		<a href="https://vite.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
	<MyProfile :user="user" @change="onChange" />
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
