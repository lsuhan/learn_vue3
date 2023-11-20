<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			count: 0,
		});

		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldSum) => {
		// 		console.log('sum: ', sum);
		// 		console.log('oldValue: ', oldSum);
		// 	},
		// );

		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// });

		//obj.count 로 만 할시 typeof => number 그렇기 떄문에 특정 object 속성을 감지하고 싶다면 getter 함수로 넣어주면됨 ()=> obj.count 로 하면 속성 감지.
		// watch(
		// 	() => obj.count,
		// 	(newValue, oldValue) => {
		// 		console.log('newValue: ' + newValue);
		// 		console.log('oldValue: ' + oldValue);
		// 	},
		// );

		//obj 의 newvalue 와 oldValue 는 서로 같은값 => 왜냐면 두개는 객체의 주소값을 보기 떄문에 두 값은 같다.
		// watch(obj, (newValue, oldValue) => {
		// 	console.log('newValue: ' + newValue);
		// 	console.log('oldValue: ' + oldValue);
		// });

		// watch(person, newValue => {
		// 	console.log('newValue : ', newValue);
		// });

		//person.obj 게터 함수로 할시 obj안에 counter 가 바뀔때 바뀌는게 아니고 object 자체가 바뀌어야 watch 함수가 동작함 만약 counter가 바뀔때를 알고 싶다면 ()=> person.obj.counter 로 해야 할수있다.
		watch(
			() => person.obj,
			newValue => {
				console.log('newValue: ', newValue);
			},
		);

		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>
