<template>
	<header class="header" :class="{'transparent': isRouteNameHome}">
		<b-row align-v="center" class="justify-content-between">
			<b-col cols="auto">
				<b-link class="header__logo" :to="{name: 'home'}">
					<svgicon name="logo" />
				</b-link>
			</b-col>
			<svgicon v-if="isCloseShowed && !isMenuOpened" name="close" class="case-close" @click="$router.push({name: 'home'})" />
			<b-col cols="auto">
				<svg
					class="header__burger"
					:class="{'active': isMenuOpened && burgerActive}"
					@click="onMenuToggle(); burgerActive = !burgerActive"
					width="38"
					height="19"
					viewBox="0 0 38 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 8H38V11.1667H0V8Z" fill="white" />
					<path d="M0 8H38V11.1667H0V8Z" fill="white" />
				</svg>
			</b-col>
		</b-row>
		<HeaderMenu :isIndicatorClose="isIndicatorClose" @onLinkClick="onMenuToggle" />
	</header>
</template>

<script>
import StarsParticles from "@/components/elements/StarsParticles";
import HeaderMenu from "@/components/layout/HeaderMenu";

export default {
	name: "Headerlayout",
	components: {
		StarsParticles,
		HeaderMenu
	},
	data: () => ({
		burgerActive: false,
		isIndicatorClose: false
	}),
	computed: {
		isRouteNameHome() {
			if (this.$route.name==='home') return true;
			return false;
		},

		isCloseShowed() {
			if (this.$route.name==='home' || this.$route.name==='contacts' || this.$route.name==='about') return false;
			return true;
		},

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
		}
	},
	methods: {
		onMenuToggle() {
			this.isIndicatorClose = false;

			if (this.isMenuOpened) {
				this.isIndicatorClose = true;
				this.isMenuLinksShowed = false;

				this.isMenuContentShown = false;
				setTimeout(() => {
					setTimeout(() => {}, 1);
				}, 400);

				/*
				this.isMenuLinksShowed = false;
				setTimeout(() => {
					this.isMenuContentShown = false;
				}, 0.5);
				*/
			} else {
				this.isMenuOpened = true;
			}
		}
	},
	watch: {
		isMenuOpened() {
			if (this.isMenuOpened) {
				document.documentElement.classList.add("locked");
				return;
			}
			//document.documentElement.classList.remove('locked');
			setTimeout(() => {
				document.documentElement.classList.remove("locked");
				this.isIndicatorClose = false;
			}, 500);
			//document.documentElement.classList.remove('locked');
		}
	},
	mounted() {
		//console.log(this.$route);
	}
};
</script>

<style lang="scss">
.header {
	padding: 0 get-vw($gutter, 320);
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	z-index: 3;
	height: get-vw(60px, 320);
	position: fixed;
	pointer-events: none;
	transition: transform .5s ease;
	background: #000000b8;
    transform: translateY(-1px);

	&.hidden {
		transform: translateY(-100%);
	}

	&.transparent {
		background: transparent;
	}

	.col-auto, svg {
		pointer-events: all;
	}

	.case-close {
		width: 29px;
		height: 21px;
		cursor: pointer;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		@include upLandscape($xl-land) {
			height: 29px;
		}
	}

	.row {
		height: 100%;
	}

	&__logo {
		display: block;

		svg {
			width: get-vw(98px, 320);
			height: get-vw(23px, 320);

			@include up($md) {
				width: 100px;
				height: 18px;
			}

			@include upLandscape($xs) {
				width: get-vw(98px, 568);
				height: get-vw(23px, 568);
			}

			@include up($lg) {
				width: get-vw(135px, 1024);
				height: get-vw(28px, 1024);
			}

			@include upLandscape($md-land) {
				width: get-vw(103px, 1024);
				height: get-vw(22px, 1024);
			}

			@include upLandscape($lg-land) {
				width: get-vw(103px, 1024);
				height: get-vw(20px, 1024);
			}

			@include upLandscape($xl-land) {
				width: get-vw(119px, 1920);
				height: get-vw(23px, 1920);
			}
		}
	}

	&__burger {
		width: 28px;
		height: 21px;
		position: relative;
		cursor: pointer;
		overflow: visible;
		transition: 0.3s ease;

		path {
			transition: transform 0.4s ease;
			transform-origin: center;
			&:first-child {
				animation: burger-start1 0.4s ease forwards;
			}
			&:last-child {
				animation: burger-start2 0.4s ease forwards;
			}
		}

		&.active {
			height: 30px;

			path {
				transition: transform 0.4s ease;
				&:first-child {
					animation: burger1 0.8s ease forwards;
				}
				&:last-child {
					animation: burger2 0.8s ease forwards;
				}
			}

			&::before {
				transform: rotate(-45deg);
				top: calc(50% - 1px);
			}

			&::after {
				transform: rotate(45deg);
				top: calc(50% - 1px);
			}
		}

		@include upLandscape($xl-land) {
			width: get-vw(40px, 1920);
		}

		@include upLandscape($xxl-land) {
			width: get-vw(38px, 1920);
		}
	}

	@include up($sm) {
		padding: 0 get-vw($gutter, 414);
		height: get-vw(60px, 414);
	}

	@include up($md) {
		padding: 0 get-vw($gutter-sm, 768);
		height: get-vw(70px, 768);
	}

	@include up($lg) {
		padding: 0 get-vw($gutter-sm, 1024);
		height: get-vw(110px, 1024);
	}

	@include up($xl) {
		background: transparent;
		mix-blend-mode: difference;
	}

	@include upLandscape($xs) {
		height: 50px;
		padding: 0 20px;
	}

	@include upLandscape($sm-land) {
		padding: 0 get-vw($gutter, 895);
		height: get-vw(100px, 895);
	}

	@include upLandscape($md-land) {
		padding: 0 get-vw($gutter-sm, 1024);
		height: get-vw(70px, 1024);
	}

	@include upLandscape($lg-land) {
		height: get-vw(80px, 1366);
		padding: 0 get-vw(40px, 1366);
	}

	@include upLandscape($xl-land) {
		height: get-vw(120px, 1920);
		padding: 0 get-vw(50px, 1920);
	}
}
</style>