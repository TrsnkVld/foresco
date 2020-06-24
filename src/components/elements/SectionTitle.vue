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
	padding: 0 0 get-vw($gutter-sm, 320);
	color: $white;
	user-select: none;
	text-align: left;
	
	@include up($sm) {
		padding: 0 0 get-vw($gutter-sm, 414);
    }

    @include up($md) {
		padding: 0 0get-vw($gutter-sm, 768);
		text-align: center;
    }

    @include upLandscape($xl-land) {
		padding: 0 0 $gutter-md;
		text-align: center;
    }
}
</style>