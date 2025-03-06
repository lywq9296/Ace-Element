<script lang="ts">
import {
	defineComponent,
	ref,
	reactive,
	computed,
	watch,
	onMounted,
	onUpdated
} from 'vue';
import MyProfile from './components/ MyProfile.vue';

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

export default defineComponent({
	name: 'App',
	components: { MyProfile },
	setup() {
		// ref, reactive
		const count = ref<number | string>(0);
		const user = reactive<User>({
			firstName: 'John',
			lastName: 'Doe',
			age: 18
		});

		// 模板引用
		const ageRef = ref<HTMLHeadingElement | null>(null);

		// 计算属性
		const buttonStatus = computed<{ text: string; disabled: boolean }>(() => {
			return {
				text: user.age >= 10 ? '可以参加' : '未满 10 岁不可已参加',
				disabled: user.age < 10
			};
		});
		const fullName = computed(() => user.firstName + '·' + user.lastName);

		// 监听器 watch

		// 监听基础类型的响应式数据
		watch(
			count,
			(newVal, oldVal) => {
				console.log('监听基础类型的响应式数据', newVal, oldVal);

				document.title = `You clicked ${newVal} times`;
			},
			{
				immediate: true,
				flush: 'post' // 回调函数执行的时机: pre:dom 更新之前;post:dom 更新之后
			}
		);
		// 监听响应式对象类型的属性
		watch(
			() => user.age, // getter function
			(newVal, oldVal) => {
				console.log('监听对象类型的属性', newVal, oldVal);
			}
		);
		watch(
			user, // getter function
			(newVal, oldVal) => {
				console.log('监听响应式对象类型', newVal, oldVal);
			}
		);
		watch(
			[count, () => user.age], // getter function
			(newVal, oldVal) => {
				console.log('监听一组响应式数据', newVal, oldVal);
			}
		);

		const increase = () => {
			if (typeof count.value === 'number') {
				count.value++;
			}

			user.age++;
		};

		console.log('in setup', ageRef.value);
		// 生命周期
		onMounted(() => {
			console.log('onMounted');

			if (ageRef.value) {
				console.log(ageRef.value);
			}
		});
		onUpdated(() => {
			console.log('onUpdated: ', document.getElementById('age')?.innerHTML);
		});

		return {
			count,
			increase,
			user,
			buttonStatus,
			fullName,
			ageRef
		};
	}
});
</script>

<template>
	<div>
		<div>
			<h1>{{ count }}</h1>
			<h2 id="age" ref="ageRef">age: {{ user.age }}</h2>
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
		<MyProfile :age="user.age" :name="fullName" :user="user" />
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
