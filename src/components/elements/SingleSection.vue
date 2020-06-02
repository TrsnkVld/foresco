<template>
    <section :style="`${bgStyle} ${textStyle}`">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'SingleSection',
    props: {
		bgStyle: {
			type: String,
			default: null
		},
		textStyle: {
			type: String,
			default: null
		}
    }
}
</script>

<style lang="scss">
section {
    padding: get-vw($gutter-sm, 320) 0;

    @include up($sm) {
        padding: get-vw($gutter-sm, 414) 0;
    }

    @include up($md) {
        padding: get-vw($gutter-sm, 768) 0;
    }

    @include up($lg) {
    }

    @include up($xl) {
        //font-size: get-vw(60px, 2560);
        //line-height: get-vw(65px, 2560);
        //letter-spacing: get-vw(-1px, 2560);
    }

    @include upLandscape($xs) {
    }

    @include upLandscape($md-land) {
    }

    @include upLandscape($lg-land) {
    }

    @include upLandscape($xl-land) {
        padding: get-vw($gutter-lg, 1920) 0;
    }
}
</style>