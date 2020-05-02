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
	padding: $gutter-md 0;
}
</style>