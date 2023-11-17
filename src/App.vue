<template>
	<div>
		<h2>반응형 메시지</h2>
		<p>{{ reactiveMessage }}</p>
		<button v-on:click="addReactiveMesssage">Add Message</button>
		<h2>일반 메시지</h2>
		<p>{{ normalMessage }}</p>
		<button v-on:click="addNormalMesssage">Add Message</button>
	</div>
</template>

<script>
import { isRef, onBeforeMount, onMounted, ref } from 'vue';

export default {
	setup() {
		console.log('setup()');
		const reactiveMessage = ref('Hello Reactive Message');
		const addReactiveMesssage = () => {
			reactiveMessage.value = reactiveMessage.value + '!';
		};
		console.log('isRef(reactiveMessage): ', isRef(reactiveMessage)); //isRef => 반응형 데이터 인지 물어봄

		let normalMessage = 'Hello Normal Message';
		const addNormalMesssage = () => {
			normalMessage = normalMessage + '!';
		};
		console.log('isRef(normalMessage): ', isRef(normalMessage)); //isRef => 반응형 데이터 인지 물어봄

		onMounted(() => {
			console.log('onMounted');
		});
		onBeforeMount(() => {
			console.log('onBeforeMount');
		});

		return {
			reactiveMessage,
			normalMessage,
			addReactiveMesssage,
			addNormalMesssage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
