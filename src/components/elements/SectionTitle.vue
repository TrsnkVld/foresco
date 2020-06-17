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
	padding: get-vw($gutter-sm, 320) 0;
	color: $white;
	user-select: none;
	text-align: left;
	
	@include up($sm) {
		padding: get-vw($gutter-sm, 414) 0;
    }

    @include up($md) {
		padding: get-vw($gutter-sm, 768) 0;
		text-align: center;
    }

    @include upLandscape($xl-land) {
		padding: $gutter-md 0;
		text-align: center;
    }
}
</style>