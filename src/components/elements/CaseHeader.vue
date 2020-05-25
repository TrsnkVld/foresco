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
	
	.case-swiper__item {
		&>.container {

			@include upLandscape($sm-land) {
				max-width: get-vw(600px, 895);
			}

			@include upLandscape($md-land) {
				max-width: get-vw(690px, 1024);
			}

			@include upLandscape($lg-land) {
				max-width: get-vw(1000px, 1366);
			}

			@include upLandscape($xl-land) {
				max-width: get-vw(940px, 1920);
			}
		}
	}
}
</style>