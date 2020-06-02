<template>
	<div id="foresco">
		<HeaderLayout />
		<transition name="route">
			<router-view />
		</transition>
	</div>
</template>

<script>
import HeaderLayout from './components/layout/HeaderLayout';

export default {
	name: 'foresco',
	components: {
		HeaderLayout
	},
	mounted() {
		console.warn(this.$route.params);
	}
}
</script>

<style lang="scss">
	#foresco {
		flex-grow: 1;
		display: flex;
		flex-flow: column;
	}
</style>
