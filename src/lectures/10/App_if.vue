<template>
	<div>
		<h2 v-if="visible">true 입니다.</h2>
		<h2 v-else>false입니다.</h2>
		<button v-on:click="visible = !visible">Toggle</button>
		<hr />

		<button v-on:click="type = 'A'">A</button>
		<button v-on:click="type = 'B'">B</button>
		<button v-on:click="type = 'C'">C</button>
		<button v-on:click="type = 'D'">D</button>

		<h2 v-if="type === 'A'">A입니다.</h2>
		<h2 v-else-if="type === 'B'">B입니다.</h2>
		<h2 v-else-if="type === 'C'">C입니다.</h2>
		<h2 v-else>D입니다.</h2>

		<hr />
		<!-- template 를 사용(통으로)-->
		<template v-if="visible">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, est
			asperiores nam distinctio consectetur, rerum iure reiciendis sit, impedit
			soluta quae minus modi ipsam natus veritatis excepturi! Eos, quam a?
		</template>

		<hr />
		<!-- if는 실제로 랜더링 된다 전환할떄 블록 내부의 컴포넌트들이 제거되고 다시 생성되기 떄문. 초기 랜더링시 거짓이면 아무런 작업을 하지않음. -->
		<!-- v-show 는 초기 조건과 상관없이 일단 렌더링 한다. -->
		<!-- 일반적으로 if 는 전환 비용이 높은 반면 show 는 전환 비용이 낫다.-->
		<h1 v-show="ok">Title 입니다</h1>
		<button v-on:click="ok = !ok">Toggle</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(false);
		const type = ref('A');
		const ok = ref(true);
		return { visible, type, ok };
	},
};
</script>

<style lang="scss" scoped></style>
