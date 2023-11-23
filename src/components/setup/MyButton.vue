<template>
	<!--non-props 속성으로 이벤트 리스너도 root element(btn에 주고 싶지만 div에 button 이벤트가 일어남. root element 이기 떄문에)에 상속이 된다.-->
	<!--non-props 속성은 props 또는 event 에 명시적으로 선언되지 않은 이벤트이다.-->
	<div class="p-3 bg-danger">
		<!-- v-bind="$attrs" -->
		<button type="button" class="btn btn-primary" @click="sayHello">
			<!--context.attrs에는 상속된 속성을 가지고 있다. 그러므로 상속한 속성을 v-bind로 접근해 $attrs 를 사용하면 모든 속성을 가지고 올수있다.-->
			My Button {{ message }}
		</button>
		<!--${{attrs}}-->
	</div>
</template>

<script>
export default {
	inheritAttrs: false, //non-props가 속성 상속이 안되게 하고싶을때.(현재는 div 에 적용된 상속 속성을 false 함)
};
</script>

<script setup>
import { ref } from 'vue';

const message = ref('message');
</script>

<style lang="scss" scoped></style>
