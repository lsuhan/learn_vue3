<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				class="form-select"
				aria-label="Default select example"
				v-model="type"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>

		<div class="col col-8">
			<!--자식 컴포넌트에서 부모 컴포넌트로 emit 사용법-->
			<!--1번방법: @click="$emit('createPost', 1, 2, 3, '김길동')" -->
			<input v-model="title" type="text" class="form-control" />
		</div>
		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// emits: ['createPost'],
	//vue 3에서 emits 옵션을 사용해 이벤트 선언 가능
	//이벤트를 선언하는건 선택사항이지만 컴포넌트를 더 잘 문서화 하기 위해 모든 이벤트를 정의하는게 좋다.
	emits: {
		createPost: newPost => {
			//유효성 검사에 걸려도 실행은됨. console창에 경고문구 뜸.
			if (!newPost.title) {
				return false;
			} else if (!newPost.type) {
				return false;
			}
			return true;
		},
	},
	//2번방법 context.emit
	setup(props, { emit }) {
		const type = ref('news');
		const title = ref('');
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);
			type.value = 'news';
			title.value = '';
		};
		return { createPost, title, type };
	},
};
</script>

<style lang="scss" scoped></style>
