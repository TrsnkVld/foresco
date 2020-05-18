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
	padding-top: $gutter-md;
	padding-bottom: $gutter-md;

	@include up($lg) {
		//padding: $gutter-md 0;
	}
}
</style>