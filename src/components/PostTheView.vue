<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>

			<hr class="my-4" />
			<div class="container text-center">
				<div class="row g-3">
					<div class="col col-4" v-for="(item, index) in posts" :key="index">
						<!--값을 전달할때는 kebobcase로 전달(is-like)-->
						<!--@toggle-like 는 자식컴포넌트에서 context.emit 명령어를 통해 부모 컴포넌트로 이벤트를 가져온 바인딩 객체.-->
						<PostAppCard
							:title="item.title"
							:contents="item.contents"
							:is-like="item.isLike"
							:type="item.type"
							:obj="obj"
							@toggle-like="item.isLike = !item.isLike"
						></PostAppCard>
						<!--props 는 단방향 바인딩 이므로 부모 컴포넌트에서 데이터를 변경하면 자식컴포넌트 에서도 데이터가 변경된다. 반대는안됨(emit사용하면 가능)-->
						<button @click="item.isLike = !item.isLike">toggle</button>
					</div>
				</div>
				<hr class="my-4" />
				<!--
					modelValue
					update:modelValue
				-->

				<!--title이라는 인자를 가지고 갈수있음-->
				<!-- <Labeltitle v-model:title="username" label="제목"></Labeltitle> -->
				<!-- <Username
					v-model:firstname="firstname"
					v-model:lastname="lastname"
				></Username> -->

				<!-- <LabelInput
					:model-value="username"
					@update:model-value="value => (username = value)"
				></LabelInput> -->
				<!--위에 소스를 풀어서 사용.-->
				<LabelInput
					v-model="username"
					label="이름"
					class="parent-class"
					style="color: red"
					id="parent-id"
				></LabelInput>
			</div>
		</div>
	</main>
</template>

<script>
import { reactive, ref } from 'vue';
import PostAppCard from './PostAppCard.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';
import Labeltitle from './Labeltitle.vue';
import Username from './UserNames.vue';
export default {
	components: {
		PostAppCard,
		PostCreate,
		LabelInput,
		// Labeltitle,
		// Username,
	},
	setup() {
		const obj = ref({
			title: '제목2',
			contents: '내용 2',
		});

		const posts = reactive([
			{ title: '제목1', contents: '내용1', isLike: true, type: 'news' },
			{ title: '제목2', contents: '내용2', isLike: true, type: 'news' },
			{ title: '제목3', contents: '내용3', isLike: true, type: 'news' },
			{ title: '제목4', contents: '내용4', isLike: true, type: 'news' },
			{ title: '제목5', contents: '내용5', isLike: false, type: 'notice' },
			{ title: '제목6', contents: '내용6', isLike: false, type: 'notice' },
		]);
		const createPost = newPost => {
			console.log('createPost');
			console.log('newTitle: ', newPost);
			posts.push(newPost);
		};

		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');

		return { obj, posts, createPost, username, firstname, lastname };
	},
};
</script>

<style lang="scss" scoped></style>
