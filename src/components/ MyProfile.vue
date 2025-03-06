<script lang="ts">
import { computed, defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
	name: 'MyProfile',
	props: {
		user: {
			type: Object as PropType<{
				firstName: string;
				lastName: string;
				age: number;
			}>,
			required: true
		},
		name: {
			type: String,
			default: 'John Doe'
		},
		age: {
			type: Number,
			default: 18
		}
	},
	emits: ['change'],
	setup(props, ctx) {
		const isHidden = ref<boolean>(false);

		const doubleAge = computed(() => props.user?.age * 2);

		const toggleHide = () => {
			isHidden.value = !isHidden.value;

			ctx.emit('change', isHidden.value);
		};

		return {
			isHidden,
			doubleAge,
			toggleHide
		};
	}
});
</script>

<template>
	<div class="profile-component">
		<h1>Name: {{ user.firstName }}·{{ user.lastName }}</h1>
		<h1 v-if="!isHidden">Age: {{ user.age }}</h1>
		<h1 v-if="!isHidden">doubleAge: {{ doubleAge }}</h1>
		<button type="button" @click="toggleHide">
			{{ isHidden ? '显示' : '隐藏' }}
		</button>
	</div>
</template>

<style scoped></style>
