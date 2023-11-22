<template>
	<div>
		<!--https://vuetifyjs.com/en/getting-started/installation/#installation-->
		<TheNav :count="count"></TheNav>
		<TheView></TheView>
	</div>
</template>

<script>
import { ref } from 'vue';
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';
export default {
	components: {
		TheNav,
		TheView,
	},
	setup() {
		const count = ref(3);
		return { count };
	},
};
</script>

<style lang="scss" scoped></style>
