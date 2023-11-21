<template>
	<div>
		<button v-on:click="increment">Click {{ state.count }}</button>
		<button v-on:click="increment">Deep Click {{ state.deep.count }}</button>
	</div>
</template>

<script>
import { nextTick, reactive } from 'vue';

export default {
	// data() {
	// 	return {};
	// }, 내부적으로 return된 객체는 reactive 함수로 감싸지는것.
	setup() {
		const state = reactive({
			count: 0,
			deep: {
				count: 0,
			},
		});

		const increment = async () => {
			state.count++;
			state.deep.count++;
			await nextTick(); // 상태 변경 후 dom 업데이트가 완료될 때 까지 기다리려면  nextTick() 전역 API를 사용할 수 있습니다;
			//이제 DOM이 업데이트 됐습니다.
		};
		return {
			state,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
