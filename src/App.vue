<template>
	<div id="foresco">
		<HeaderLayout />
		<router-view />
	</div>
</template>

<script>
import HeaderLayout from './components/layout/HeaderLayout';

export default {
	name: 'foresco',
	components: {
		HeaderLayout
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
