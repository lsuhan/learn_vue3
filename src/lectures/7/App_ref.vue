<template>
	<div>
		<p>{{ message }}</p>
		<button v-on:click="addMessage">addClick</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		// reactive() 함수는 객체타입에서만 동작한다. 만약 reactive 괄호안에 value: hello Vue.!! 라는 객체가 아니고 hello Vue.!! 라는 스트링값으로 지정 했을 떄 message 는 string 값이 되고 react하게 반응하지않는다.
		// 그렇기에 객체타입에만 동작하지않게 ref(변이 가능한 객체를 반환한다.) 를 사용한다. (value 라는 하나의 속성만 포함하는데 value 값은 메서드에서 매개변수로 받은 값을 갖고있다.)
		// let message = reactive({
		// 	value: 'hello Vue.!!',
		// });
		let message = ref('hello Vue');
		const addMessage = () => {
			message.value = message.value + '!';
		};

		console.log('message , ' + message.value);
		console.log('message typeof', typeof message.value);
		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
