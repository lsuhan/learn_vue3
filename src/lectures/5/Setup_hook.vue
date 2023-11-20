<template>
	<div>
		<p>{{ counter }}</p>
		<p>{{ message }}</p>
	</div>
	<button v-on:click="increment">click</button>
</template>

<script>
import { ref } from 'vue';

//Setup 함수 -> composition API 사용을 위한 진입점 역할을 수행함,
//컴포넌트 인스턴스가 생성되기 전에 실행함.
//setUp 함수의 첫번째 매개변수는 props -> 반응형 객체.

export default {
	setup() {
		const counter = ref(0);
		const message = ref('hello vue3');
		const increment = () => {
			counter.value++;
		};

		return {
			counter,
			message,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
