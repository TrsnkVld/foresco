<template>
	<b-container class="small">
		<div class="title-text">
			<h2 v-if="title" data-aos="fade-up">{{title}}</h2>
			<h4 data-aos="fade-up" data-aos-delay="300" data-aos-anchor=".title-text h2">{{text}}</h4>
		</div>
	</b-container>
</template>

<script>
export default {
	name: "TitleText",
	props: {
		title: {
			type: String,
			default: null
		},
		text: {
			type: String,
			default: null
		}
	}
};
</script>

<style lang="scss">
.title-text {
	color: $white;
	text-align: center;
	margin: 0 auto;
	padding: $gutter-sm 0;

	h2 {
		margin-bottom: $gutter-md;
	}

    @include up($lg) {
        //padding: $gutter-lg 0;
    }
}
</style>