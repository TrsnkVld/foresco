<template>
	<div id="foresco">
		<HeaderLayout />
		<transition name="route">
			<router-view />
		</transition>
		<FooterLayout v-if="!isRouteNameHome" />
	</div>
</template>

<script>
import HeaderLayout from './components/layout/HeaderLayout';
import FooterLayout from './components/layout/FooterLayout';

export default {
	name: 'foresco',
	components: {
		HeaderLayout,
		FooterLayout
	},
	computed: {
		isRouteNameHome() {
			if (this.$route.name==='home') return true;
			return false;
		},
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
