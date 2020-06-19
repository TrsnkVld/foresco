<template>
	<section class="case-header" ref="test" :style="`height: ${heightPx}px`">
		<slot></slot>
		<transition name="case-header__scroll">
			<svgicon v-if="!isRouteNameHome && !isPageScrolled" v-scroll-to="{el: '.case section:first-child', duration: 1200, }" class="case-header__scroll" name="arrow_scroll" />
		</transition>
	</section>
</template>

<script>
export default {
	name: "CaseHeader",
	data: () => ({
		heightPx: null
	}),
	created() {
		window.addEventListener("resize", this.height);
	},
	destroyed() {
		window.removeEventListener("resize", this.height);
	},
	methods: {
		height() {
			//alert(window.innerHeight);
			return (this.heightPx = window.innerHeight);
		}
	},
	computed: {
		isRouteNameHome() {
			if (this.$route.name==='home') return true;
			return false;
		},

		isPageScrolled: {
			get: function() {
				return this.$store.state.isPageScrolled;
			},
			set: function(newValue) {
				this.$store.state.isPageScrolled = newValue;
			}
		}
	},
	watch: {
		heightPx(newHeight, oldHeight) {
			//console.log(`it changed to ${newHeight} from ${oldHeight}`);
		}
	},
	mounted() {
		this.height();
	}
};
</script>

<style lang="scss">
.case-header {
	height: 100vh;
	padding: 0;

	& > .container {
		height: 100%;
	}

	.container {
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
			max-width: 950px;
		}
	}

	&.no-swipe {
		pointer-events: none;
	}

	&__scroll {
		position: absolute;
		bottom: 80px;
		left: 50%;
		transform: translate(-50%, 0);
		width: 32px;
		height: 19px;
		pointer-events: all;
		cursor: pointer;
		transition: 1s;
		animation: scroll-down 1.5s infinite;

	}
}
</style>