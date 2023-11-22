<template>
	<!--non-props 속성으로 이벤트 리스너도 root element(btn에 주고 싶지만 div에 button 이벤트가 일어남. root element 이기 떄문에)에 상속이 된다.-->
	<!--non-props 속성은 props 또는 event 에 명시적으로 선언되지 않은 이벤트이다.-->
	<div class="p-3 bg-danger">
		<!-- v-bind="$attrs" -->
		<button type="button" class="btn btn-primary" @click="sayHello">
			<!--context.attrs에는 상속된 속성을 가지고 있다. 그러므로 상속한 속성을 v-bind로 접근해 $attrs 를 사용하면 모든 속성을 가지고 올수있다.-->
			My Button
		</button>
		<!--${{attrs}}-->
	</div>
</template>

<script>
export default {
	emits: ['sayHello'], //emits 속성을 해야하는이유: nonProps 가 전달되서 상위 객체에 속성값이 꽂히는걸 방지 할수 있다. 그래서 emits는 이벤트를 발생시킬때 마다 사용하는것이 좋다.
	// inheritAttrs: false, //non-props가 속성 상속이 안되게 하고싶을때.(현재는 div 에 적용된 상속 속성을 false 함)
	setup(props, context) {
		// console.log(context.attrs); //
		// console.log(context.attrs.class); //
		// console.log(context.attrs.id); //
		// console.log(context.attrs.onClick); //
		const sayHello = () => {
			context.emit('sayHello');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
