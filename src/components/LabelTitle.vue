<template>
	<label>
		{{ label }}
		<input type="text" v-model="value" />
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	//modelValue 로  안받고 title 이라는 인자로 받을수 있음
	props: ['title', 'label'],
	emits: ['update:title'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.title;
			},
			set(value) {
				emit('update:title', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
