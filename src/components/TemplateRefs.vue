<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }}, {{ $refs.input === input }}
		</p>
		<hr />
		<ul>
			<!--문자열로 바인딩-->
			<!-- <li v-for="(item, index) in fruits" :key="index" ref="itemRefs">
				{{ item }} 
			</li> -->
			<!--함수로 바인딩-->
			<li
				v-for="(item, index) in fruits"
				:key="index"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ item }}
			</li>
		</ul>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';

export default {
	components: {
		TemplateRefsChild,
	},
	setup() {
		const input = ref(null);

		onMounted(() => {
			input.value.value = '나는 이수한';
			console.log(input.value.value);

			// itemRefs.value.forEach(item => console.log('item: ', item.textContent));
			itemRefs.value.forEach(item => console.log('item: ', item));

			console.log(child.value.message);
			child.value.sayHello();
		});

		const fruits = ref(['수한', '혜원', '탄탄']);
		const itemRefs = ref([]);

		const child = ref('');

		return { input, fruits, itemRefs, child };
	},
};
</script>

<style lang="scss" scoped></style>
