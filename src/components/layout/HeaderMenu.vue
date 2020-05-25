<template>
	<transition name="menu" @after-enter="isMenuContentShown = true">
		<div class="menu" v-if="isMenuOpened">
			<transition
				name="menu-links"
				@enter="timer"
				@after-leave="isMenuOpened = false, isMenuLinksShowed = false"
			>
				<ul v-if="isMenuContentShown" ref="menu" class="menu-links">
					<div class="indicator" :class="{'indicator-close': isIndicatorClose}">
						<div
							class="indicator__inner"
							:style="`height: ${indicatorHeight}; background-color: ${indicatorColor}`"
						/>
					</div>

					<div class="menu-links__inner" :class="{anim: isMenuLinksShowed, 'closing': isIndicatorClose}">
						<li
							v-for="(item, index) in menuLinks"
							:key="index"
							class="menu-links__item"
							:class="{'active': index===indicatorActive}"
							:style="`transition-delay: ${(menuLinks.length-index+1)/20+0.2}s; color: ${indicatorColor}`"
							@click="test2(index)"
							:ref="`link-${index}`"
						>
							<router-link
								:to="{name: item.link}"
								@mouseover="indicatorMovement(index, $event), indicatorColor=item.color, indicatorActive=index"
								@click.native="$emit('onLinkClick')"
							>{{ item.title }}</router-link>
						</li>
					</div>
				</ul>
			</transition>

			<div class="glow" />
			<!--<StarsParticles /> -->
		</div>
	</transition>
</template>

<script>
export default {
	name: "HeaderMenu",
	data: () => ({
		test: false,
		indicatorHeight: null,
		indicatorColor: null,
		indicatorActive: 0,
		menuLinks: [
			{
				title: "проекты",
				color: "rgba(55, 119, 255, 0.75)",
				link: "home"
			},
			{
				title: "о нас",
				color: "rgba(255, 167, 56)",
				link: "home"
			},
			{
				title: "команда",
				color: "rgba(96, 224, 135)",
				link: "home"
			},
			{
				title: "контакты",
				color: "rgba(62, 219, 237)",
				link: "contacts"
			}
		]
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

		linksStyle() {
			if (this.isMenuContentShown) {
				//return `transform: translateX(-${this.$refs.menu.clientWidth}px)`;
			} else {
				//return "transform: translateX(0px)";
			}
		}
	},
	methods: {
		timer() {
			setTimeout(() => {
				this.isMenuLinksShowed = true;
			}, 1);
		},

		timer2() {
			setTimeout(() => {
				this.isMenuContentShown = false;
			}, 1);
		},

		indicatorMovement(index, e) {
			if (index == this.menuLinks.length - 1) {
				this.indicatorHeight = "100%";
			} else {
				this.indicatorHeight = `${e.target.parentElement.offsetTop + e.target.offsetHeight}px`;
				console.log(e);
			}
		},
	},
	mounted() {
	}
};
</script>

<style lang="scss">
.menu {
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100vh;
	z-index: -1;
	background: $black;
	padding: 50px $gutter;

	.indicator {
		width: 1px;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(255, 255, 255, 0.3);

		&__inner {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100px;
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
		&__inner {
			display: flex;
			flex-flow: column;
			justify-content: center;
			height: 100%;
    		width: 100%;
			transition: left 0.6s cubic-bezier(0.65, 0, 0.35, 1);
			//transform: translateX(-500px);
			padding-left: $gutter-lg;
			padding-right: $gutter-sm;
			position: relative;
			left: -100%;
			transition-delay: .0301s;

			&.anim {
				transition-delay: 0s;
				transform: translateX(0px);
				left: 0;

				.menu-links__item {
					left: 0;
					transform: translateX(0px);
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
		}
	}

	ul {
		position: relative;
		z-index: 1;
		//transform: translateX(20%);
		//opacity: 0;
		padding: 0;
		margin: 0;
		max-width: 730px;
		height: calc(100% - 110px);
		padding-left: $gutter-sm;
		margin-top: $gutter-md;
		margin-left: auto;
		position: relative;
		font-family: TT Norms;
		font-size: 37px;
		line-height: normal;
		transition: max-width, font-size, margin, height, padding-left, 0.6s cubic-bezier(0.65, 0, 0.35, 1), opacity .9s ease;
		overflow: hidden;

		.menu-links__item {
			cursor: pointer;
			margin-bottom: 0;
			position: relative;
			left: 0;
			transform: translateX(50px);
			transition: .4s;

			a {
				padding: $gutter 0;
				display: block;
				text-decoration: none;
				color: rgba(255, 255, 255, 0.28);
				transition: color 0.4s ease-out, transform 0.4s ease;
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

		&.menu-links {
			//animation: menu-links 0.8s forwards ease;
			//animation-delay: 0.4s;
		}

		@include up($sm) {
			font-size: 55px;
			padding-left: $gutter-md;
			margin-top: $gutter-lg;
			height: calc(100% - 140px);
		}

		@include up($md) {
			max-width: 450px;
			padding-left: $gutter-lg;
			padding-right: $gutter-sm;
		}

		@include up($lg) {
			//max-width: 550px;
			//font-size: 85px;
		}

		@include up($xl) {
			max-width: 680px;
		}

		@include upLandscape($xl-land) {
			padding-left: 0;
			padding-right: 0;
			font-size: get-vw(85px, 1920);
			max-width: get-vw(680px, 1920);
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

	@include up($md) {
		padding: 70px 0;
		height: 100%;
	}
}
</style>