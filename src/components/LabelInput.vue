<template>
	<!-- non-props 로 전달 하는순간 부모로 받은 class 는 중첩이 되지만 다른 속성은 자식 컴포넌트가 지정한 속성으로 덮어쓰기 된다.-->
	<label class="child-class" id="child-id">
		{{ label }}
		<!-- <input type="text" v-model="value" /> -->
		<!-- <input
			type="text"
			:value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)"
		/> -->

		<!--위에 input은 v-model 을 풀어서 쓴 태그-->
		<!-- <input v-model="username" type="text" /> -->
	</label>
	<input type="text" v-bind="$attrs" v-model="value" class="form-control" />
</template>

<script>
import { computed } from 'vue';

export default {
	//props 로 받아온 데이터(v-model의 데이터를 modelValue로 받음)를 update 한후 emits 로 부모 컴포넌트에 바인딩.(부모와 자식간에 양방향 바인딩 하는것 처럼 보임 v-model 과 같은기능)
	//model value로 값을 입력받아 updateValue로 값을 변경할수있다.
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
