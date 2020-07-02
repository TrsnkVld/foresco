<template>
	<section class="case-header" ref="test" :style="`height: ${heightPx}px`">
		<slot></slot>
		<transition name="case-header__scroll">
			<svgicon
				v-if="!isRouteNameHome "
				v-scroll-to="{el: '.case section:first-child', duration: 1200, }"
				class="case-header__scroll"
				name="arrow_scroll"
			/>
		</transition>
	</section>
</template>

<script>
import device from "current-device";

export default {
	name: "CaseHeader",
	data: () => ({
		heightPx: null,
		widthPx: null,
	}),
	created() {
		window.addEventListener("resize", this.height);
		//window.addEventListener("deviceorientation", doOnOrientationChange, true);
	},
	destroyed() {
		window.removeEventListener("resize", this.height);
		//window.removeEventListener("deviceorientation",doOnOrientationChange,true);
	},
	methods: {
		height() {
			//alert(window.innerHeight);

			if (this.$route.name == 'home') {
				this.heightPx = window.innerHeight;
				this.widthPx = window.innerWidth;
			} else {
				if (this.widthPx !== window.innerWidth) {
					this.heightPx = window.innerHeight;
					this.widthPx = window.innerWidth;
				}
			}
			this.$emit('onScreenRotation');
		},
		/*
		doOnOrientationChange() {
			switch (window.orientation) {
				case -90:
				case 90:
					alert("landscape");
					break;
				default:
					alert("portrait");
					break;
			}
		},
		device() {
			alert(device.orientation);
		}
		*/
	},
	computed: {
		isRouteNameHome() {
			if (this.$route.name === "home") return true;
			return false;
		},

		isPageScrolled: {
			get: function() {
				return this.$store.state.isPageScrolled;
			},
			set: function(newValue) {
				this.$store.state.isPageScrolled = newValue;
			}
		},

		windowWidth() {
			return window.innerWidth;
		},

		/*
			handleOrientationChange() {
				const orientation = window.screen.orientation.type;
				if (orientation === "portrait-primary") {
					alert('portrait mode')
				} else if (orientation === "landscape-primary") {
					alert('landscape mode')
				}
			}
		*/
	},
	watch: {
		/*
		heightPx(newHeight, oldHeight) {
			console.log(`it changed to ${newHeight} from ${oldHeight}`);
		}
		*/
	},
	mounted() {
		this.height();
		//this.device();
	}
};
</script>

<style lang="scss">
.case-header {
	height: 100vh;
	padding: 0;
	position: relative;
	//padding-bottom: 40px;

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

	&.no-swipe, &.no-swipe.swiper-slide-active {
		pointer-events: none;
		
		.case-swiper__item {
			pointer-events: none;
		}
	}

	&__scroll {
		position: absolute;
		z-index: 1;
		bottom: 40px;
		left: 50%;
		transform: translate(-50%, 0);
		width: 32px;
		height: 19px;
		pointer-events: all;
		cursor: pointer;
		transition: 1s;
		animation: scroll-down 1.5s infinite;

		@include up($md) {
			bottom: 80px;
		}
	}

	@include up($sm) {
		//padding-bottom: 15vh;
	}
}
</style>