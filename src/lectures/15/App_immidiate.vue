<template>
	<div>
		{{ message }}
		{{ reverseMessage }}
	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('hello vue');
		const reverseMessage = ref('');

		// watch 로 값변경 하기전 최초에도 실행하고 싶을때

		//computed vs watch (좀 헷갈림 다시 봐야할듯)
		// computed - vuew 인스턴스의 상태(ref, reactive) 의 종속관계를 자동으로 세팅하고자 할때
		// watch - vue 인스턴스 상태(ref, rective)의 변경시점에 특정 액션(call api, push, route)을 취하고자 할때 적합

		//1번방법
		const reverseFunction = newValue => {
			console.log('즉시 실행함');
			reverseMessage.value = newValue.split('').reverse().join('');
		};
		watch(message, reverseFunction);
		reverseFunction(message.value);

		//2번방법
		const reverseFunction2 = () => {
			console.log('즉시 실행함');
			reverseMessage.value = message.value.split('').reverse().join('');
		};
		watch(message, reverseFunction);
		reverseFunction();

		//3번방법
		watch(
			message,
			newValue => {
				console.log('즉시 실행함');
				reverseMessage.value = newValue.split('').reverse().join('');
			},
			{
				immediate: true,
			},
		);
		return { message, reverseMessage };
	},
};
</script>

<style lang="scss" scoped></style>
