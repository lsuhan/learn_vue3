<template>
	<div class="card">
		<div class="card-body">
			<!-- type : news, notice-->
			<span class="badge bg-secondary">{{
				type === 'news' ? '뉴스' : '공지사항'
			}}</span>
			<h5 class="card-title red mt-2">{{ title }}</h5>
			<p class="card-text">{{ contents }}</p>

			<a href="#" :class="isLikeClass">좋아요</a>
		</div>
		<!--자식컴포넌트에서의 데이터 바인딩은 부모컴포넌트에 영향을 미치지 않는다. 하지만 emit 을 통해 부모컴포넌트로 이벤트 전달을 할 수 있다. -->
		<!-- <button @click="toggleLike">toggle</button> -->
	</div>
</template>

<script setup>
import { ref, useCssModule, computed } from 'vue';

const props = defineProps({
	type: {
		type: String,
		default: 'news',
		validator: value => {
			return ['news', 'notice'].includes(value);
		},
	},
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
		// required: true,
	},
	isLike: {
		type: Boolean,
		default: false,
	},

	//obj 함수의 default 값은 {} 이게 아니고 () => {return {};}이런식으로 적용해줘야댐 (기본값을 반환하는 함수로 적용해줘야됨)
	obj: {
		type: Object,
		default: () => {
			return {};
		},
	},
});

const emit = defineEmits(['toggleLike']);

const isLikeClass = computed(() =>
	props.isLike ? 'btn btn-danger' : 'btn btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));
const toggleLike = () => {
	emit('toggleLike');
};
</script>

<!--scoped 는 이파일 안에서만 작동하게끔 함.-->
<!--module 을 사용하면 스타일 내장 객체로 사용할 수 있게끔함 :class="$style.red "-->
<style lang="scss">
.red {
	color: v-bind(color) !important;
}
</style>
