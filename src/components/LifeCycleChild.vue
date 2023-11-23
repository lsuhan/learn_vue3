<template>
	<div class="card">
		<div class="card-body">lifeCycleChild</div>
		<input type="text" id="input" />
	</div>
</template>

<script>
import {
	onBeforeMount,
	onBeforeUnmount,
	onMounted,
	onUnmounted,
	ref,
} from 'vue';

export default {
	setup() {
		// console.log('child, setup');

		onBeforeMount(() => {
			console.log('child, onBeforeMount');
		});

		onMounted(() => {
			console.log('child, onMounted');
		});

		//해제하기 전이므로 dom 객체 가져올수있음
		onBeforeUnmount(() => {
			console.log('child onBeforeUnmount');
			console.log(document.querySelector('#input'));
		});

		//해제하고 난 후 이므로 dom 객체 가져올수없음
		onUnmounted(() => {
			console.log('child onUnmounted');
			console.log(document.querySelector('#input'));
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
