<template>
	<div>
		<div id="modifier">
			<div @click="clickDiv">
				DIV영역
				<p @click.self="clickP">
					p영역
					<!-- <span @click.stop="clickSpan"> span영역 </span> -->
					<span @click="clickSpan"> span영역 </span>
					<a @click.prevent.stop="clickA" href="https://naver.com">a 영역</a>
				</p>
			</div>
		</div>
		<button @click.once="clickDiv"></button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			//location.href = 'https://naver.com';
		};

		const clickP = () => {
			console.log('clickP');
		};

		const clickSpan = () => {
			console.log('clickSpan');
			//alert('좋아요');
		};

		const clickA = () => {
			alert('어떤기능');
		};

		return { clickDiv, clickP, clickSpan, clickA };
	},
};
</script>

<style lang="scss" scoped>
#modifier div,
#modifier p,
#modifier span {
	padding: 40px;
}
#modifier div {
	background-color: #ccc;
}
#modifier p {
	background-color: #999;
}
#modifier span {
	background-color: #666;
	display: block;
}
</style>
