<template>
	<div>
		<p>author: {{ author }}</p>
		<p>title: {{ title }}</p>
		<p>price: {{ book.price }}</p>
	</div>
</template>
<script>
import { reactive, toRefs, toRef } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'Vue11 Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 이 책을 지금 바로 읽습니다 ;)',
			price: '무료',
		});

		//const { author, title } = toRefs(book);
		const author = toRef(book, 'author');
		const title = toRef(book, 'title');
		// book 은 반응형이고 구조분해 author, title 은 구조분해를 했기때문에 반응성을 잃음 이럴때 toRefs 혹은 toRef 를 사용하면 반응형을 유지 할 수있다.
		return { author, title, book };
	},
};
</script>

<style lang="scss" scoped></style>
