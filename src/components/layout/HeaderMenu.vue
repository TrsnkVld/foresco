<template>
	<transition name="menu" @after-enter="isMenuContentShown = true">
		<div class="menu" v-show="isMenuOpened"> <!--  :style="`height: ${heightPx}px`" -->
			<transition
				name="menu-links"
				@enter="timer"
				@after-leave="isMenuOpened = false, isMenuLinksShowed = false"
			>
				<HeaderMenuInner v-if="isMenuContentShown" @onLinkClick="$emit('onLinkClick')" :isIndicatorClose="isIndicatorClose" />
			</transition>

<!--
			<div class="glow" />
	-->
		</div>
	</transition>
</template>

<script>
import HeaderMenuInner from '@/components/layout/HeaderMenuInner';

export default {
	name: "HeaderMenu",
	components: {
		HeaderMenuInner,
	},
	data: () => ({
		test: false,
		indicatorHeight: null,
		heightPx: null,
	}),
	props: {
		isIndicatorClose:{
			type: Boolean,
			default: false,
		}
	},
	computed: {

		isMenuOpened: {
			get: function() {
				return this.$store.state.isHeaderMenuOpened;
			},
			set: function(newValue) {
				this.$store.state.isHeaderMenuOpened = newValue;
			}
		},

		isMenuContentShown: {
			get: function() {
				return this.$store.state.isHeaderMenuContentShown;
			},
			set: function(newValue) {
				this.$store.state.isHeaderMenuContentShown = newValue;
			}
		},

		isMenuLinksShowed: {
			get: function() {
				return this.$store.state.isMenuLinksShowed;
			},
			set: function(newValue) {
				this.$store.state.isMenuLinksShowed = newValue;
			}
		},
	},
	methods: {
		height() {
			//alert(window.innerHeight);
			return (this.heightPx = window.innerHeight);
		},

		timer() {
			setTimeout(() => {
				this.isMenuLinksShowed = true;
			}, 1);
		},
	},
	watch: {
		heightPx(newHeight, oldHeight) {
			console.log(`it changed to ${newHeight} from ${oldHeight}`);
		}
	},
	mounted() {
		this.height();
	}
};
</script>

<style lang="scss">
.menu {
	position: fixed;
	display: flex;
	top: 0;
	right: 0;
	width: 100%;
	height: 100vh;
	z-index: -1;
	//background: $black;
	padding: 50px $gutter;

	.indicator {
		width: 1px;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		background: #4d5051;

		&__inner {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 0px;
			background-color: rgba(55, 119, 255, 0.75);
			transition: height background 0.3s ease-in-out;
			transition: height, background-color, transform, 0.7s ease;
			transform-origin: bottom;
		}

		&-close {
			.indicator__inner {
				transform: scaleY(0);
				transition:  transform, 0.5s ease;
			}
		}
	}

	&-links {
		position: relative;
		z-index: 1;
		//transform: translateX(20%);
		//opacity: 0;
		padding: 0;
		margin: 0;
		//max-width: 730px;
		height: calc(100% - 110px);
		padding-left: $gutter-sm;
		padding-left: 0;
		margin-top: $gutter-md;
		margin-left: auto;
		position: relative;
		font-family: TT Norms;
		font-size: 37px;
		line-height: normal;
		overflow: hidden;
		width: 600px;
		width: get-vw(280px, 320);
		right: 0;
		transition: transform $transition-menu ease;

		&__inner {
			display: flex;
			flex-flow: column;
			justify-content: center;
			height: 100%;
    		width: 100%;
			transition: transform $transition-menu ease;
			//transform: translateX(-500px);
			padding-left: $gutter-lg;
			padding-right: $gutter-sm;
			padding-left: get-vw($gutter-sm, 320);
			position: relative;
			//transition-delay: .0301s;
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			width: get-vw(280px, 320);
			height: 100%;

			&.anim {
				//transition-delay: 0s;
				//transform: translateX(0px);

				.menu-links__item {
					//left: 0;
					//transform: translateX(0px);
				}
			}

			&.closing {
				.active {
					a {
						transform: translateX(25px);
						transition-delay: 0s;
						transition: transform, color, .6s ease;
						color: inherit !important;
					}
				}
			}

            @include up($md) {
				width: get-vw(480px, 768);
			}
			
			@include up($lg) {
				//max-width: 450px;
				width: get-vw(500px, 1024);
			}

            @include upLandscape($xl-land) {
				width: 700px;
				padding-left: $gutter-lg;
            }
		}

		&__item {
			cursor: pointer !important;
			margin-bottom: 0;
			position: relative;
			left: 0;
			//transform: translateX(50px);
			transition: transform $transition-menu ease-out, opacity .3s linear;
			pointer-events: none;

			a {
				padding: $gutter 0;
				cursor: pointer !important;
				display: block;
				text-decoration: none;
				color: rgba(255, 255, 255, 0.28);
				//transition: color 0.4s ease-out, transform 0.4s ease;
				pointer-events: all;
				transition: color 0.4s ease-out, transform 0.4s ease, opacity .3s linear 0s;

				&>span {
					position: relative;
					pointer-events: none;
				}
			}

			&.active,
			&:hover {
				a {
					color: $white;
				}
			}

			&::before {
				display: none;
			}
		}

		&-overflow {
			position: absolute;
			top: 0;
			left: 0;
			white-space: nowrap;
			overflow: hidden;
			width: 0;
    		transition: width .6s ease;
		}

		@include up($sm) {
			font-size: 55px;
			margin-top: 0;
			height: 100%;
		}

		@include up($md) {
			//max-width: 450px;
			width: get-vw(480px, 768);
			padding-left: $gutter-lg;
			padding-right: $gutter-sm;
			height: 70%;
			margin-top: auto;
			margin-bottom: auto;
		}

		@include up($lg) {
			//max-width: 450px;
			width: get-vw(500px, 1024);
		}

		@include up($lg) {
			//max-width: 550px;
			//font-size: 85px;
		}

		@include up($xl) {
			//max-width: 680px;
		}

		@include upLandscape($xl-land) {
			padding-left: 0;
			padding-right: 0;
			font-size: 85px;
			width: 700px;
			height: 100%;
    		max-height: 830px;

			//max-width: get-vw(680px, 1920);
		}
	}


	.glow {
		position: absolute;
		top: 50%;
		left: 35%;
		opacity: 0.2;
		transform: translate(-50%, -50%);
		background: radial-gradient(circle closest-side, #3779bccc, #0067de00 73%);
		width: 400%;
		z-index: -1;
		animation: glow-animation 5s infinite ease-in-out;
		pointer-events: none;

		&::after {
			content: "";
			display: block;
			width: 100%;
			padding-top: 100%;
		}

		@include up($sm) {
			width: 200%;
		}

		@include up($md) {
			width: 150%;
			left: 85%;
		}

		@include up($lg) {
			//width: 100%;
			//left: 65%;
		}

		@include up($xl) {
			width: 90%;
			left: 35%;
		}
	}

	.stars-particles {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	@include up($sm) {
		padding: get-vw(100px, 414) $gutter;
	}

	@include up($md) {
		padding: get-vw(70px, 768) $gutter;
	}

	@include up($lg) {
		padding: get-vw(110px, 1024) $gutter;
	}

	@include upLandscape($xs) {
		padding: 20px $gutter;
	}

	@include upLandscape($sm-land) {
		padding: get-vw(100px, 895) $gutter;
	}

	@include upLandscape($md-land) {
		padding: get-vw(70px, 1024) $gutter;
	}

	@include upLandscape($lg-land) {
		padding: get-vw(80px, 1366) $gutter;
	}

	@include upLandscape($xl-land) {
		padding: get-vw(120px, 1920) $gutter;
	}
}
</style>