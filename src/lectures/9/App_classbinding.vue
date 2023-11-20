<template>
	<!-- <div class="text" :class="{ active: isActive, 'text-danger': hasError }">
		텍스트 입니다.
	</div> -->

	<!-- class에 선언할게 많을시 object 형식으로 사용해도 무방-->
	<!-- <div class="text" :class="classObj">텍스트 입니다.</div> -->

	<!-- 배열 형식으로도 들어갈 수 있음 배열 형식으로 쓸떄 여러가지 class  명을 줄수 있다.-->
	<div
		class="text"
		:class="[
			isActive ? 'active-class' : 'disabled-class',
			errorClass,
			classObj,
		]"
	>
		텍스트 입니다.
	</div>

	<button v-on:click="toggle">toggle</button>
	<button v-on:click="hasError = !hasError">toggleError</button>
</template>

<script>
import { computed } from 'vue';
import { reactive, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		// const classObj = reactive({
		// 	active: true,
		// 	'text-danger': true,
		// });

		const classObj = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value;
		};

		return { isActive, toggle, hasError, classObj, activeClass, errorClass };
	},
};
</script>

<style lang="scss" scoped>
.active {
	font-weight: 900;
}

.text-danger {
	color: red;
}
</style>
