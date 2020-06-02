<template>
	<ul ref="menu" class="menu-links">
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
				:class="{'active': index===indicatorActive, 'color-active': isIndicatorClose && index===indicatorActive}"
				@click="test2(index)"
				:ref="`link-${index}`"
				:style="`transition-delay: ${(index+2)/4}s`"
				@mouseover="indicatorMovement(index, $event), indicatorColor=item.color, indicatorActive=index"
			>
				<router-link :to="{name: item.link}" @click.native="$emit('onLinkClick')">
					<span>
						{{ item.title }}
						<span class="menu-links-overflow">
							<span :style="`color: ${indicatorColor}`">{{ item.title }}</span>
						</span>
					</span>
				</router-link>
			</li>
		</div>
	</ul>
</template>

<script>
export default {
	name: "HeaderMenuInner",
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
		isIndicatorClose: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		menuHeight() {
            return `height: ${window.innerHeight}px`;
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

		indicatorMovement(index, e) {
			if (index == this.menuLinks.length - 1) {
				this.indicatorHeight = "100%";
			} else {
				this.indicatorHeight = `${e.target.parentElement.offsetTop +
					e.target.offsetHeight}px`;
					if (e.target.parentElement.nextSibling===null) {
						console.log('X')
					} else {
						console.log(e.target.parentElement.nextSibling);
					}
			}
		}
	},
	watch: {
		isIndicatorClose() {
			if (this.isIndicatorClose) {
				console.log(true);
			} else {
				console.log(false);
			}
		}
	},
	mounted() {
		this.indicatorHeight = `${document.querySelector('.menu-links__item.active').offsetTop + document.querySelector('.menu-links__item.active').offsetHeight}px`;
	}
};
</script>

<style lang="scss">
.menu {

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
			height: 0;
			background-color: rgba(55, 119, 255, 0.75);
			transition: height background 0.3s ease-in-out;
			transition: height, background-color, transform, 0.7s ease;
			transform-origin: bottom;
		}

		&-close {
			.indicator__inner {
				transform: scaleY(0);
				transition: transform, 0.5s ease;
			}
		}
	}

	&-links {
		position: relative;
		z-index: 1;
		padding: 0;
		margin: 0;
		width: 100%;
		height: calc(100% - 110px);
		margin-top: get-vw($gutter-md, 320);
		margin-left: auto;
		position: relative;
		font-family: TT Norms;
		font-size: get-vw(37px, 320);
		line-height: get-vw(42px, 320);
		overflow: hidden;
		transition: .7s ease;
		transition-delay: 0s !important;

		&__inner {
			display: flex;
			flex-flow: column;
			justify-content: center;
			height: 100%;
			width: 100%;
			transition: left 0.6s ease;
			padding-left: get-vw(55px, 320);
			padding-right: $gutter-sm;
			position: relative;
			transition-delay: 0.0301s;
			position: absolute;
			top: 0;
    		right: 0;

			&.anim {
				transition-delay: 0s;
				transform: translateX(0px);

				.menu-links__item {
					left: 0;
					transform: translateX(0px);
				}
			}

			&.closing {
				.active {
					a {
						transform: translateX(10%);
						transition-delay: 0s;
						transition: transform, color, 0.6s ease;
					}
				}
			}

			@include up($sm) {
				padding-left: get-vw($gutter-lg, 414);
			}

			@include up($md) {
				padding-left: get-vw($gutter-lg, 768);
				width: get-vw(450px, 768);
			}

			@include up($lg) {
				padding-left: get-vw($gutter-lg, 1024);
				width: get-vw(550px, 1024);
			}

			@include up($xl) {
				padding-left: get-vw($gutter-lg, 1366);
				width: get-vw(680px, 1366);
			}

			@include upLandscape($xs-land) {
				padding-left: get-vw(55px, 568);
			}

			@include upLandscape($sm-land) {
				padding-left: get-vw($gutter-lg, 414);
			}

			@include upLandscape($md-land) {
				padding-left: get-vw($gutter-lg, 768);
				width: get-vw(440px, 1024);
			}

			@include upLandscape($lg-land) {
				padding-left: get-vw($gutter-lg, 1024);
			}

			@include upLandscape($xl-land) {
				padding-left: get-vw($gutter-lg, 1366);
				width: get-vw(680px, 1920);
			}
		}

		&__item {
			
			cursor: pointer;
			margin-bottom: 0;
			position: relative;
			left: 0;
			transform: translateX(get-vw(100px, 320));
			transition: 0.6s;
			pointer-events: none;

			a {
				padding: get-vw(10px, 320) 0;
				display: block;
				text-decoration: none;
				color: rgba(255, 255, 255, 0.28);
				transition: color 0.4s ease-out, transform 0.4s ease;
				pointer-events: all;

				span {
					display: block;
					pointer-events: none;
				}

				&> span {
					position: relative;

					.menu-links-overflow {
						position: absolute;
						top: 0;
						left: 0;
						width: 0;
						height: 100%;
						overflow: hidden;
						transition: width .7s ease;

						span {
							position: absolute;
							top: 0;
							left: 0;
							white-space: nowrap;
						}
					}
				}

				@include up($sm) {
					padding: get-vw($gutter, 414) 0;
				}

				@include up($md) {
					padding: get-vw($gutter, 768) 0;
				}

				@include up($lg) {
					padding: get-vw($gutter, 1024) 0;
				}

				@include up($xl) {
					padding: get-vw($gutter, 1366) 0;
				}

				@include upLandscape($xs-land) {
					padding: get-vw(10px, 568) 0;
				}

				@include upLandscape($sm-land) {
					padding: get-vw($gutter, 895) 0;
				}

				@include upLandscape($md-land) {
					padding: get-vw($gutter, 1024) 0;
				}

				@include upLandscape($lg-land) {
					padding: get-vw($gutter, 1366) 0;
				}

				@include upLandscape($xl-land) {
					padding: get-vw($gutter, 1920) 0;
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

			&.color-active {
				.menu-links-overflow {
					width: 100%;
				}
			}


			@include up($sm) {
				transform: translateX(get-vw(100px, 414));
			}

			@include up($md) {
				transform: translateX(get-vw(100px, 768));
			}

			@include up($lg) {
				transform: translateX(get-vw(100px, 1024));
			}

			@include up($xl) {
				transform: translateX(get-vw(100px, 1366));
			}

			@include upLandscape($xs-land) {
				transform: translateX(get-vw(100px, 568));
			}

			@include upLandscape($sm-land) {
				transform: translateX(get-vw(100px, 895));
			}

			@include upLandscape($md-land) {
				transform: translateX(get-vw(100px, 1024));
			}

			@include upLandscape($lg-land) {
				transform: translateX(get-vw(100px, 1366));
			}

			@include upLandscape($xl-land) {
				transform: translateX(get-vw(100px, 1920));
			}
		}

		@include up($sm) {
			font-size: get-vw(55px, 414);
			line-height: get-vw(60px, 414);
			margin-top: get-vw($gutter-lg, 414);
			height: calc(100% - 140px);
		}

		@include up($md) {
			font-size: get-vw(55px, 768);
			line-height: get-vw(60px, 768);
			width: get-vw(450px, 768);
			margin-top: get-vw($gutter-lg, 768);
		}

		@include up($lg) {
			font-size: get-vw(85px, 1024);
			line-height: get-vw(90px, 1024);
			margin-top: get-vw($gutter-lg, 1024);
			width: get-vw(550px, 1024);
			
		}

		@include up($xl) {
			font-size: get-vw(85px, 1366);
			line-height: get-vw(90px, 1366);
			width: get-vw(680px, 1366);
			margin-top: get-vw($gutter-lg, 1366);
		}

		@include upLandscape($xs-land) {
			font-size: get-vw(37px, 568);
			width: none;
			line-height: get-vw(42px, 568);
			margin-top: 0;
			height: 100%;
		}

		@include upLandscape($sm-land) {
			font-size: get-vw(55px, 895);
		}

		@include upLandscape($md-land) {
			font-size: get-vw(55px, 1024);
			max-width: get-vw(440px, 1024);
		}

		@include upLandscape($lg-land) {
			font-size: get-vw(85px, 1366);
			line-height: get-vw(90px, 1366);
		}

		@include upLandscape($xl-land) {
			font-size: get-vw(85px, 1920);
			width: get-vw(680px, 1920);
			
		}
	}
}
</style>