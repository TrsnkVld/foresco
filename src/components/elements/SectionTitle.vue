<template>
	<b-container>
		<component :is="tag" class="section-title" data-aos="fade-up" >
			<slot></slot>
		</component >
	</b-container>
</template>
<script>
export default {
	name: "SectionTitle",
	props: {
		tag: {
			type: String,
			default: 'h2',
		}
	}
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