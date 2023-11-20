<template>
	<div>
		<ul>
			<template v-for="(item, index) in eventItems" :key="item.id">
				<!-- <li v-if="item.id % 2 === 0"> -->
				<li>
					ID:{{ item.id }} , 인덱스: {{ index }}, 메세지: {{ item.message }}
				</li>
			</template>

			<!-- <li v-for="(item, index) in items" :key="item.id">
				인덱스: {{ index }}, 메세지: {{ item.message }}
			</li> -->
		</ul>
	</div>

	<hr />

	<!-- 객체를 반복해서 돌릴수도 있다.-->
	<ul>
		<li v-for="(value, key, index) in myObj" :key="key">
			{{ index }}-{{ key }}-{{ value }}
		</li>
	</ul>
</template>

<script>
import { computed } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'java' },
			{ id: 2, message: 'script' },
			{ id: 3, message: 'css' },
			{ id: 4, message: 'vue' },
		]);

		const eventItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObj = reactive({
			title: '제목',
			author: '홍길동',
			publishAt: '2023-11-20',
		});

		return { items, eventItems, myObj };
	},
};
</script>

<style lang="scss" scoped></style>
