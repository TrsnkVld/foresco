<template>
	<b-container class="content-block-wrap">
		<b-row>
			<slot></slot>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: "ContentBlockWrap"
};
</script>

<style lang="scss">
.content-block-wrap {

	&>.row {

		@include upLandscape($xl-land) {
			margin: 0 -25px;
		}
	}

	@include up($md) {
		padding-top: $gutter-md;
		padding-bottom: $gutter-md;
	}
	
}
</style>