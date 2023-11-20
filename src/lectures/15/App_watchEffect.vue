<template>
	<div>
		<form action="" @submit.prevent="save(title, contents)">
			<div>
				<input v-model.lazy="title" type="text" placeholder="title" />
			</div>
			<div>
				<textarea v-model.lazy="contents"></textarea>
			</div>
			<button>저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`저장되었습니다 title: ${title}, contents: ${contents}`);
		};
		//watchEffect 는 watch와 다르게 최초의 한번 실행한다.
		//watch vs watchEffect
		//watch와 watchEffect 는 둘다 관련 작업(api call, push, route)을 반응적으로 수행할수 있게 해준다. 하지만 주요한 차이점은 관련된 반응형 데이터 추적 방식
		//watch: 명시적으로 관찰된 소스만 추적 - 콜백내에서 엑세스한 항목은 추적하지않고 콜백은 소스가 실제로 변경됐을때만 트리거 한다. immididate를 넣으면 최초로 즉시 실행할 수있음
		//watchEffect: 종속성 추적 및 부작용을 한단계로 결합. 동기 실행중에 엑세스 되는 모든 반응 속성을 자동으로 추적한다. 최초로 즉시한번실행
		//watch 명시적으로(어떠한데이터를 관찰하겠다.ex)app_watch예제의 message 반응형 데이터를 관찰) 관찰, watchEffect 는 콜백함수 안에서 사용한 반응형 api 를 감시하기때문에 덜 명시적이다.
		watchEffect(() => {
			console.log('watchEffect');
			save(title.value, contents.value);
		});

		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
