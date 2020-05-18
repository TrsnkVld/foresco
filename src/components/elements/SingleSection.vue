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
    padding: $gutter-sm 0;

    @include up($lg) {
		  //padding: $gutter-lg 0;
    }
}
</style>