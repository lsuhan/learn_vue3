<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까 ?</h3>
		<!-- <p>{{ teacher.lectures.length > 0 ? '있음' : '없음' }}</p> -->
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<button v-on:click="counter++">Counter : {{ counter }}</button>
		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['html/css', 'javascript', 'vue3'],
		});

		//1. computed 함수(계산식과 같은 계산된 속성.) cache 기능이 있어 값이 변하지 않으면 굳이 호출하지 않는다. computed 의기능 !! 메서드 함수 방식과 비교했을때 함수는 반복적으로 계속 호출함.
		//computed 게터 전용. 계산된 속성에 새 값을 할당 하려고 하면 런타임이 일어난다.
		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		});

		//2. 일반함수 일반함수는 exitsLecture 를 여러번 호출 하면 반복적으로 계속 호출한다. 그렇기 떄문데 computed 가 비용적으로 더 적게 들 수 밖에없다.
		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		};
		//counter 버튼 계속 누를시 method 방식만 실행됨. computed는 캐시기능이 있어 값이 바뀌지 않는 한 다시 호출하지않음.
		const counter = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');

		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				// value -> 현재 짐코딩
				[firstName.value, lastName.value] = value.split(' '); // 구조분해 할당 후 firstName 과 lastName 의 반응형 변수에 값을 넣어줌
			},
		});

		console.log('console 출력 = ' + fullName.value);
		//readonly라고 런타임 에러남 -> 이떄 쓰는게 computed 의 setter 함수를 이용해 수정.
		fullName.value = '짐 코딩';
		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
