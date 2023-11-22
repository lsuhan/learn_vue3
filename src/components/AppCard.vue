<template>
	<div class="card">
		<!-- v-if 를 사용하면 name 을 가지고 있는 slot 만 가져감-->
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-message="헤더메세지"></slot>
		</div>
		<div v-if="$slots.default" class="card-body">
			<slot :child-message="childMessage" hello-message="안녕하세요"></slot>
		</div>
		<div v-if="hasFooter" class="card-footer text-body-secondary">
			<slot name="footer" footer-message="푸터 메세지"></slot>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { ref } from 'vue';

export default {
	setup(props, { slots }) {
		const childMessage = ref('자식컴포넌트 메시지');

		const hasFooter = computed(() => !!slots.footer);

		return { childMessage, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>
