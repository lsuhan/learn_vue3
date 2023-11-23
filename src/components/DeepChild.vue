<template>
	<div class="card">
		<div class="card-header">Deep Child</div>
		<div class="card-body">
			<p>staticMessage: {{ staticMessage }}</p>
			<p>message: {{ message }}</p>
			<p>count: {{ count }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';

export default {
	setup() {
		const staticMessage = inject('static-massage');
		//message.value = message.value + '1'; // 이렇게 변경하는거 추천X
		//inject 로 받은 데이터를 변경하고싶을때 inject로 받은 데이터값을 변경하지말고 부모에서 함수를 정의해 내린 함수를 통해 수정  하는것을 추천한다.
		const { message, updateMessage } = inject('massage');
		updateMessage('!!!!!!!!!!!');

		const count = inject('count');
		return { staticMessage, message, count };
	},
};
</script>

<style lang="scss" scoped></style>
