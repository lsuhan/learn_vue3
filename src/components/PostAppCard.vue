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

<script>
import { ref, useCssModule, computed } from 'vue';

export default {
	// 객체 타입으로 지정하는게 좋음.
	props: {
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
	},
	//setup함수에 props를 받을수 있다.
	emits: ['toggleLike'],
	setup(props, context) {
		// console.log('props.title: ', props.title);
		const isLikeClass = computed(() =>
			props.isLike ? 'btn btn-danger' : 'btn btn-outline-danger',
		);
		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);
		const toggleLike = () => {
			//props.obj.title = '김길동'; // 자바스크립트 언어상 이렇게 바뀌는것도 됨 . 하지만 잘못된 방식임. props를 자식데이터로 가져온이상 데이터르
			context.emit('toggleLike'); // 자식컴포넌트에서 부모컴포넌트로 바인딩을 하려면 props 데이터 흐름 말고 emit을 사용해 이벤트를 올린다.context객체안에 emit을 이용하면됨
		};
		return { isLikeClass, typeName, toggleLike };
	},
};
</script>

<!--scoped 는 이파일 안에서만 작동하게끔 함.-->
<!--module 을 사용하면 스타일 내장 객체로 사용할 수 있게끔함 :class="$style.red "-->
<style lang="scss">
.red {
	color: v-bind(color) !important;
}
</style>
