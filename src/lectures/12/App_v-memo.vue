<template>
	<div>
		<!--
			v memo 는 성능 최적화. 현재 memo 에 views 를 넣었는데 다른 subs 나 likes 의 카운터를 올려도 동작 안하다가 views 이벤트를 넣는순간 subs와 likes도 한번에 바뀐값으로 출력됨.
			[]괄호 안에 반응형 ref의 값이 바뀔때 동작함.
			공식문서에선 v-for list length > 1000 일때 사용하길 권장.
		-->
		<div v-memo="[views]">
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>

		<button @click="subscribers++">Subs++</button>
		<button v-on:click="views++">views++</button>
		<button v-on:click="likes++">likes++</button>

		<div>
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const subscribers = ref(4000);
		const views = ref(400);
		const likes = ref(20);

		return { subscribers, views, likes };
	},
};
</script>

<style lang="scss" scoped></style>
