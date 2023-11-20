<template>
	<div>
		<!-- 이중 중괄호-->
		<p>{{ msg }}</p>
		<!--v-text 로 도 뿌릴수 있음 string 으로 인지-->
		<p v-text="msg"></p>
		<!--html 뿌림 html 로 인지-->
		<p v-html="htmlStr"></p>
		<!--v-pre 사용시 dom 객체가 컴파일 에서 빠져 {{msg}} 그대로 출력된다-->
		<p v-pre>{{ msg }}</p>
		<!--v-once 는 한번만 렌더링 하므로 update 성능을 좋게 할 수 있다.-->
		<p v-once>{{ msg }} !!!!!</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕학세요');
		const htmlStr = ref('<strong>나는 이수한 입니다. </strong>');

		return { msg, htmlStr };
	},
};
</script>

<style lang="scss" scoped></style>
