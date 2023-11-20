<template>
	<div>
		<p>문자열 : {{ message }}</p>
		<!--일회성 보간 수행가능 -> 데이터가 변경되어도 갱신 하지 않음.-->
		<p v-once>문자열: {{ message }}</p>
		<button v-on:click="message = message + '!'">Click</button>
		<hr />
		<!-- 
      1. 이중 중괄호는 데이터를 html이 아닌 일반 텍스트로 해석. 실제 html 을 출력하려면 v-html 디렉티브 를 사용. 
      2. html 보간은 신뢰할수 있는 컨텐츠에서만 사용하고 사용자가 사용하는 컨텐츠에서는 사용하지말것(Xss 취약점.)
    -->
		<h2>텍스트: {{ rawHtml }}</h2>
		<p v-html="rawHtml"></p>
		<!--v-bind(속성 바인딩)태그는 (:) 로 단축해서 사용할수있음-->
		<div :title="dynamicTitle">마우스를 올려보세요.</div>
		<input type="text" :disabled="isInputDisabled" value="이수한" />
		<!--v-bind 는 객체로 넣을수도 있다. (다중속성 바인딩)-->
		<input v-bind="attrs" />
		<!--이중 중괄호 안에서는 자바스크립트 문법도 사용 할 수 있다.-->
		<h2>javascript</h2>
		{{ message.split('').reverse().join('') }} <br />
		{{ isInputDisabled ? '예' : '아니오' }}
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세용');
		const rawHtml = ref('<strong>안녕하세요.</strong>');
		const dynamicTitle = ref('안녕하세여~~~');
		const isInputDisabled = ref(false);
		const attrs = ref({
			type: 'text',
			value: '12345678',
			disabled: false,
		});
		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
