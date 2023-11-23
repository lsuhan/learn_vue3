<template>
	<div class="container py-4">
		{{ msg }}
		<input v-model="message" type="text " />
		<br />
		{{ message }}
	</div>
	<button @click="sayHello">클릭</button>
	<PostItem type="news" title="제목" contents="내용" :is-like="true"></PostItem>

	<PostItem type="news" title="제목" contents="내용" :is-like="true"></PostItem>

	<PostItem type="news" title="제목" contents="내용" :is-like="true"></PostItem>

	<PostItem type="news" title="제목" contents="내용" :is-like="true"></PostItem>

	<TemplateRefsChild ref="child"></TemplateRefsChild>
	<template v-if="child">
		{{ child.message }}
	</template>
	<hr />
	<MyButton class="parent-class"></MyButton>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from './TemplateRefsChild.vue';
import MyButton from '@/components/setup/MyButton.vue';

const msg = 'Hello world';
const message = ref('');
const sayHello = () => {
	alert('hello wold');
};

const child = ref(null);s
defineExpose({
	msg,
});

const response = await axios('https://dummy.restapiexample.com/api/v1/employees');
console.log(response)
</script>

<style lang="scss" scoped></style>
