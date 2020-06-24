<template>
    <section :style="`${(bgStyle) ? bgStyle : ''} ${(textStyle) ? textStyle : ''}`">
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
    overflow: hidden;
    /*
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
    }

    @include upLandscape($xs) {
    }

    @include upLandscape($md-land) {
    }

    @include upLandscape($lg-land) {
    }

    @include upLandscape($xl-land) {
        padding: 60px 0;
    }

    @include upLandscape($xxl-land) {
        padding: 80px 0;
    }
    */
}
</style>