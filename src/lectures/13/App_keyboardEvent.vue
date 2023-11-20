<template>
	<div>
		<!-- enter 말고도 다양한 수식어 가 있다 키 수식어로 검색-->
		<input type="text" @keyup.ctrl.enter="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">
				{{ todo }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		const todos = ref([]);

		const addTodo = event => {
			todos.value.push(event.target.value);
			event.target.value = '';
			event.target.focus();
		};
		return { todos, addTodo };
	},
};
</script>

<style lang="scss" scoped></style>
