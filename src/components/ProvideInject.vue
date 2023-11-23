<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">ProvideInject Component</div>
			<div class="card-body">
				<button @click="count++">click</button>
				<Child></Child>
			</div>
		</div>
	</div>
</template>

<script>
import { inject, provide, readonly, ref } from 'vue';
import Child from './Child.vue';
export default {
	components: {
		Child,
	},
	setup() {
		const staticMassage = 'static message';
		const message = ref('message');
		const count = ref(10);
		const updateMessage = appendMessage => {
			message.value = message.value + appendMessage;
		};

		//provide - props 전달을 바로 자식에게가 아닌 deep한 하위 컴포넌트에 props 를 보내고 싶을때 사용. 받는쪽은 inject
		//만약 inject 로 받은 데이터를 변경해야 하는 경우에는 변경을 제공하는 함수을 부모에서 같이 보내주는 것이 좋음.
		provide('static-massage', staticMassage);
		provide('massage', { message: readonly(message), updateMessage });
		provide('count', count);

		//undefind setup 함수의 밖에있는 mounted 는 이미 컴포넌트 인스턴스가 생성된 후 이므로 this.msg(main.js 에 있는 globalProperties) 로 접근이 가능하다.
		//하지만 setup 함수 안에 있을때의 this 는 setup 함수 안에서는 인스턴스가 생성되기 전이므로 this 로 접근할수없다.
		//이때!!!! provide, inject 를 쓰는게 좋다
		// console.log(this.msg);

		const msg = inject('msg');
		console.log(msg);

		//main.js 의 provide로 선언한 데이터 가져오기
		const appMessage = inject('app-message');
		console.log(appMessage);

		return { count };
	},

	//main.js 에서 global 로 선언된 값 가져온값
	mounted() {
		console.log(this.msg);
	},
};
</script>

<style lang="scss" scoped></style>
