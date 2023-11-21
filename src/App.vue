<template>
	<div>
		<!--https://vuetifyjs.com/en/getting-started/installation/#installation-->
		<TheNav></TheNav>
		<TheView></TheView>
	</div>
</template>

<script>
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';
export default {
	components: {
		TheNav,
		TheView,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
