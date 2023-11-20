<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		//ref가 반응형 객체의 속성으로 접근할 때, 자동적으로 내부 값으로 벗겨내서, 일반적인 속성과 마찬가지로 동작합니다. 이때 반응형은 연결되어 있습니다.
		//ref -> object 에서 사용함
		const count = ref(0);
		const state = reactive({
			count, // ref로 선언한 count; 반응형 객체의 속성으로 주입하면 자동으로 .value 가 언랩핑이 되어 사라진다.
		});

		count.value++;
		count.value++;
		console.log(count.value);
		//.value 가 안붙음
		console.log(state.count);

		// ref -> array 에서 사용함
		const message = ref('hello');
		const arr = reactive([message]);
		//.value 를 붙여 찍어야댐
		console.log('arr[0: ]', +arr[0].value);

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
