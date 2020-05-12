<template>
    <section class="case-header" ref="test" :style="`height: ${heightPx}px`">
        <slot></slot>
    </section>   
</template>

<script>
export default {
    name: 'CaseHeader',
	data: () => ({
		heightPx: null,
	}),
	created() {
		window.addEventListener("resize", this.height);
	},
	destroyed() {
		window.removeEventListener("resize", this.height);
	},
	methods: {
		height() {
            return this.heightPx = window.innerHeight;
        }
	},
	mounted() {
        this.height();
	}

}
</script>

<style lang="scss">
.case-header {
    height: 100vh;
    padding: 0;

    &>.container {
        height: 100%;
    }
}
</style>