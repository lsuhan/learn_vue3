<template>
	<div></div>
</template>

<script>
import { reactive, readonly } from 'vue';
export default {
	setup() {
		const original = reactive({
			count: 0,
		});
		const copy = readonly(original);
		original.count++;
		copy.count++; //이 타겟은 readonly이기 때문에 값을 바꿀수 없다.
		console.log(original.count);
		console.log(copy.count);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
