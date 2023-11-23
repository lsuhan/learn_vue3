<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="hello, world" />
		<LifeCycleChild v-if="visible"></LifeCycleChild>
		<hr />
		<button @click="visible = !visible">ToggleChild</button>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifeCycleChild from './LifeCycleChild.vue';
export default {
	components: {
		LifeCycleChild,
	},
	setup() {
		// console.log('setup');
		const inputRef = ref(null);
		const message = ref('');
		const visible = ref(false);

		// onBeforeMount(() => {
		// 	//before 마운트는 아직 dom 에접근하기 전이기 때문에 value 값 안찍임
		// 	console.log('onBeforeMount', inputRef.value);
		// });

		// //현재 컴포넌트에 해당하는 자식 컴포넌트까지 mount 되고 현재 컴포넌트 마운트가 실행.
		// onMounted(() => {
		// 	//onMounted 마운트는  dom 에접근 하고 난 후이기 때문에 value 값 접근가능
		// 	console.log('onMounted', inputRef.value.value);
		// });

		//beforeUpdate와 update 는 메서드만 선언해서는 실행이안됨. 위 template 안에 {{message}} 라는 값을 넣어줬을때 실행
		//왜냐면 두개의 라이프 사이클 메서드는 렌더링 되는 시점의 데이터를 추적하기 떄문임
		//반응형 변수가 update 되기 바로 전 실행
		// onBeforeUpdate(() => {
		// 	console.log('parent, onBeforeUpdate', message.value);
		// 	console.log(
		// 		'DOM content:',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		// //반응형 변수가 update 되고 난 후 실행
		// onUpdated(() => {
		// 	console.log('parent, onUpdated', message.value);
		// 	console.log(
		// 		'DOM content:',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		return { inputRef, message, visible };
	},
	// data: () => ({
	// 	dataMessage: 'data message',
	// }),
	// //vue2에서의 라이프 사이클 현재는 setup 함수로 쓰임
	// beforeCreate() {
	// 	//data option 을 처리한 이전 이기 떄문에 안나옴
	// 	console.log('beforeCreate', this.dataMessage);
	// },

	// //vue2에서의 라이프 사이클 현재는 setup 함수로 쓰임
	// created() {
	// 	//data option 을 처리한 이후 이기 떄문에 나옴
	// 	console.log('created', this.dataMessage);
	// },
};
</script>

<style lang="scss" scoped></style>
