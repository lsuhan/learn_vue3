<template>
	<div>
		<!-- inline 스타일 적용-->
		<div :style="styleObject">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolore
			rem neque dignissimos quaerat voluptas iure saepe, dolor dolores esse
			sunt, quo magnam recusandae corrupti commodi itaque quidem excepturi
			possimus!
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px', //inline 으로 적용시 camel 케이스로 대부분 넣는다
		// });

		const fontSize = ref(13);

		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});
		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
