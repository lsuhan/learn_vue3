<template>
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('');
		//우리는 종종 반응형 상태가 변경 되었을때에 감지하여 다른 작업(api call 등)을 수행해야 하는 경우가 있습니다.
		//예를 들어 어떠한 상태가 변경 되었을때 DOM을 변경하거나 비동기 작업을해서 다른 상태를 변경하는 것입니다.
		//Composition API의 watch 함수를 사용 하여 반응형 상태가 변경될 때마다 특정 작업을 수행할 수 있습니다.
		watch(message, (newValue, oldValue) => {
			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue);
		});
		return { message };
	},
};
</script>

<style lang="scss" scoped></style>
