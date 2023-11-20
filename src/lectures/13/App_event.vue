<template>
	<div>
		<!--
			이벤트 버블링&캡처링
			1. event.preventDefault : 기본기능을 막는기능
			2. stopPropagation: 이벤트 전파를 막는기능 
		-->
		<!-- event 객체 말고 인자를 가지고 갈때 인자 + event -->
		<button @click="printEventInfo('hello Vue3', $event)">
			inline event handler
		</button>
		<hr />

		<input type="text" @keyup="onKeyupHandler" />
	</div>
</template>

<script>
export default {
	setup() {
		const printEventInfo = (message, event) => {
			console.log('message = ' + message);
			console.log('event.target = ' + event.target);
			console.log('event.target.tagName = ' + event.target.tagName);
		};

		const onKeyupHandler = event => {
			console.log('event.key: ' + event.key);
		};

		return { printEventInfo, onKeyupHandler };
	},
};
</script>

<style lang="scss" scoped></style>
