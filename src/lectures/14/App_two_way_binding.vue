<template>
	<div>
		<!-- 
			v-model: 양방향 바인딩으로 동적으로 사용 할 수 있다 
			v-model 을 써도 되지만 프로젝트에 따라서 주석한 부분에 대해(@change) 형석으로 쓸 수 도 있다. 차후 예제에서 다룰 예정
		-->
		<h2>input value</h2>
		<!-- <input
			type="text"
			:value="inputValue"
			@input="event => (inputValue = event.target.value)"
		/> -->

		<!--lazy 수식어: 원래는 입력할때마다 데이터를 동기화 하지만 lazy를 사용하면 focus out OnChange 됐을때 데이터가 동기화됨-->
		<!-- <input type="text" v-model.lazy="inputValue" /> -->

		<!-- number수식어 : number 타입이 들어왔을때 바로 number로 형변환이 됨-->
		<!-- <input type="text" v-model.number="inputValue" /> -->

		<!-- trim 수식어: 앞뒤 공백을 없애줌 -->
		<input type="text" v-model.trim="inputValue" />

		<div>{{ inputValue }}</div>
		<!-- <div>{{ typeof inputValue }}</div> -->

		<h2>textarea</h2>
		<!-- <textarea
			:value="textareaValue"
			@input="event => (textareaValue = event.target.value)"
		></textarea> -->
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>

		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<!-- <input
			type="checkbox"
			id="checkbox"
			:checked="checkboxValue"
			@change="event => (checkboxValue = event.target.checked)"
		/> -->
		<!-- checkbox default 값이 true false 이지만 true-value 및 false-value 로 값을 바꿀수 있다.-->
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkboxValue"
			true-value="YES"
			false-value="NO"
		/>

		<h3>checkbox values</h3>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			html
		</label>

		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			css
		</label>

		<label>
			<input type="checkbox" value="javascript" v-model="checkboxValues" />
			javascript
		</label>

		<div>
			{{ checkboxValues }}
		</div>

		<hr />
		<h2>radio value</h2>

		<!-- <label>
			<input
				type="radio"
				name="type"
				value="O"
				:checked="radioValue === 'O'"
				@change="event => (radioValue = event.target.value)"
			/>
			O형
		</label>

		<label>
			<input
				type="radio"
				name="type"
				value="A"
				:checked="radioValue === 'A'"
				@change="event => (radioValue = event.target.value)"
			/>
			A형
		</label> -->

		<label>
			<input
				type="radio"
				name="type"
				value="O"
				:checked="radioValue === 'O'"
				v-model="radioValue"
			/>
			O형
		</label>

		<label>
			<input
				type="radio"
				name="type"
				value="A"
				:checked="radioValue === 'A'"
				v-model="radioValue"
			/>
			A형
		</label>
		<div>
			{{ radioValue }}
		</div>

		<hr />

		<!-- <select
			:value="selectValue"
			@change="event => (selectValue = event.target.value)"
		>
			<option value="html">html</option>
			<option value="css">css</option>
			<option value="java">java</option>
		</select> -->

		<select v-model="selectValue">
			<option value="html">html</option>
			<option value="css">css</option>
			<option value="java">java</option>
		</select>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref('YES');
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');

		return {
			inputValue,
			textareaValue,
			checkboxValue,
			checkboxValues,
			radioValue,
			selectValue,
		};
	},
};
</script>

<style lang="scss" scoped></style>
