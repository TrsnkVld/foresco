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
    padding: $gutter-lg 0;
}
</style>