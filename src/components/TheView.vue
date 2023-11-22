<template>
	<main>
		<div class="container py-4">
			<!-- @click="sayHello" -->
			<MyButton class="my-btn" id="my-btn" @say-hello="sayHello"></MyButton>
			<LabelInput label="이름" data-id="id입니다."></LabelInput>

			<hr />
			<FancyButton>Click!! <span style="color: red">@@@@@</span></FancyButton>
			<FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
			<FancyButton>
				<template v-slot="{ fancyMessage }">{{ fancyMessage }}</template>
				<!--v-slot 은 default 표현식에서 바로 가져올수있다.-->
			</FancyButton>
			<hr />
			<AppCard>
				<!-- <template v-slot:header>제목입니다.</template>
				<template v-slot:default>바디입니다..</template>
				<template v-slot:footer>푸터입니다..</template> -->

				<!-- <template #header>제목입니다.</template> -->
				<!-- <template #default>바디입니다..</template> -->
				<!-- 암시적으로 default slot 하겠습니다.
				<template #footer>푸터입니다..</template> -->

				<!-- 동적으로 slot 을 설정-->
				<!-- <template #[slotArgs]>제목입니다.</template> -->
				<!--child메세지는 하위에서 지정한 거기 때문에 slot 에서는 안됨. 자식 컴토넌트에 slot의 props 로 넘겨주면 해결가능-->

				<template #header="{ headerMessage }">
					{{ headerMessage }}
				</template>

				<template #default="{ childMessage, helloMessage }">
					디폴트입니다.{{ message }}
					{{ childMessage }}
					{{ helloMessage }}
				</template>

				<template #footer="{ footerMessage }">
					{{ footerMessage }}
				</template>
			</AppCard>

			<AppCard>게시글입니다.</AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from './AppCard.vue';
import { ref } from 'vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요');
		};

		const message = ref('안녕');

		const slotArgs = ref('header');
		return { sayHello, slotArgs, message };
	},
};
</script>

<style lang="scss" scoped></style>
