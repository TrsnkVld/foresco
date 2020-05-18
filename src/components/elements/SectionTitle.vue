<template>
	<b-container>
		<h2 class="section-title" data-aos="fade-up" >
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
	padding: $gutter-sm 0;
	color: $white;

    @include up($lg) {
		//padding: $gutter-lg 0;
    }
}
</style>