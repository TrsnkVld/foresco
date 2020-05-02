<template>
	<b-container>
		<h2 class="section-title">
			<slot></slot>
		</h2>
	</b-container>
</template>
<script>
export default {
	name: "SectionTitle",
};
</script>

<style lang="scss">
.section-title {
	padding: $gutter-lg 0;
	color: $white;
}
</style>