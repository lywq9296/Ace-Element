<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import HelloWorld from './HelloWorld.vue';
import { userKey } from '../keys';

interface IPerson {
	firstName: string;
	lastName: string;
	age: number;
}

interface IEvents {
	(e: 'change', hidden: boolean): void;
}

// const props = defineProps({
// 	user: {
// 		type: Object as PropType<IPerson>,
// 		required: true
// 	}
// });
const props = withDefaults(defineProps<{ user?: IPerson }>(), {
	user: () => ({
		firstName: 'Lee',
		lastName: 'ywq',
		age: 20
	})
});

// const emits = defineEmits(['change']);
const emits = defineEmits<IEvents>();

const isHidden = ref(false);
const doubleAge = computed(() => props.user.age * 2);

const currentUser = inject(userKey);

const toggleHidden = () => {
	isHidden.value = !isHidden.value;

	emits('change', isHidden.value);
};
</script>

<template>
	<h1>Hello World</h1>
	<HelloWorld msg="Vite + Vue" />
	<h1>currentUser: {{ currentUser?.name }}</h1>
	<h1>Name: {{ user.firstName }}·{{ user.lastName }}</h1>
	<h1 v-if="!isHidden">Age: {{ user.age }}</h1>
	<h1 v-if="!isHidden">doubleAge: {{ doubleAge }}</h1>
	<button type="button" @click="toggleHidden">
		{{ isHidden ? '显示' : '隐藏' }}
	</button>
</template>

<style scoped></style>
