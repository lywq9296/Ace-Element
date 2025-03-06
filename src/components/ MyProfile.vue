<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue';

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
	setup(props) {
		const doubleAge = computed(() => props.user?.age * 2);

		return {
			doubleAge
		};
	}
});
</script>

<template>
	<div class="profile-component">
		<h1>Name: {{ user.firstName }}·{{ user.lastName }}</h1>
		<h1>Age: {{ user.age }}</h1>
		<h1>doubleAge: {{ doubleAge }}</h1>
	</div>
</template>

<style scoped></style>
