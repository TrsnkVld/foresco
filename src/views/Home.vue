<template>
	<main :class="routeName">
		<transition name="menu">
			<!--<StarsParticles v-if="isWelcomeScreenShowing" intro /> -->
		</transition>
		<CaseHeader :class="{'no-swipe': !isRouteNameHome}">
			<swiper
				class="case-swiper"
				:options="swiperOptions"
				ref="casesSwiper"
				@slideChange="setCurrentSlide"
				:key="componentKey"
			>
				<swiper-slide class="case-swiper__item" v-for="(item, index) in cases" :key="index">
					<CaseCard
						:title="item.title"
						:logo="item.logo"
						:subTitle="item.subtitle"
						:imageSrc="item.image"
						:glowColor="item.color"
						:alias='item.alias'
						:tags='item.tags'
						:style="(currentSlide === index) ? `opacity: ${slideOpacity}`: null"
					/>
				</swiper-slide>
			</swiper>
			<div class="case-swiper-nav" :class="{'hidden': !isRouteNameHome}">
				<svgicon
					name="arrow"
					class="case-swiper-nav__prev"
					slot="button-prev"
					:style="`stroke: ${cases[currentSlide].color}`"
				/>
				<div class="case-swiper-pagination">
					<div class="case-swiper-pagination__inner" />
					<!--:style="`color: ${cases[currentSlide].color}`"-->
				</div>
				<svgicon
					name="arrow"
					class="case-swiper-nav__next svg-down"
					slot="button-next"
					:style="`stroke: ${cases[currentSlide].color}`"
				/>
			</div>
		</CaseHeader>

		<transition name="route">
			<router-view @onCaseLoad="setCaseIndex" />
		</transition>
	</main>
</template>

<script>
export default {
	name: "Home",
	data: () => ({
		componentKey: 0,
		sliderMouseWheel: true,
		colors: [
			"background-color: #f04f6c;",
			"background-color: #141516;",
			"background-color: #2d2d32;",
			"background-color: #ffffff;"
		],
		currentSlide: 1,
		slideOpacity: 1,
		dragged: 0,
	}),
	methods: {
		setCaseIndex(caseIndex) {
			this.currentSlide = caseIndex;
			this.$refs.casesSwiper.$swiper.slideTo(caseIndex, 0);
		},

		setCurrentSlide() {
			this.currentSlide = this.$refs.casesSwiper.$swiper.activeIndex;
		},

		handleClickSlide(event) {
			//console.log(event);
			//this.dragged = +1;
			//console.log('asd');
			//if(this.dragged === 2) {
				//console.log(this.$refs.casesSwiper.$swiper.activeIndex);
				//this.slideOpacity = this.slideOpacity - 0.005;
			//}
		}
	},
	computed: {
		isRouteNameHome() {
			if (this.$route.name==='home') return true;
			return false;
		},

		cases() {
			return this.$store.state.cases;
		},

		swiperOptions() {
			return {
				direction: "vertical",
				mousewheel: this.sliderMouseWheel,
				slidesPerView: 1,
				slidesPerGroup: 1,
				speed: 1600,
				shortSwipes: true,
				longSwipesMs: 100,
				threshold: 20,
				//effect: 'fade',
				//followFinger: false,
				//spaceBetween: 15,
				navigation: {
					nextEl: ".case-swiper-nav__next",
					prevEl: ".case-swiper-nav__prev"
				},
				pagination: {
					el: ".case-swiper-pagination__inner",
					type: "fraction",

					renderFraction: function(currentClass, totalClass) {
						return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
					}
				}
			};
		},

		routeName() {
			return this.$route.name;
		},

		isWelcomeScreenShowing: {
			get: function() {
				return this.$store.state.isWelcomeScreenShowing;
			},
			set: function(newValue) {
				this.$store.state.isWelcomeScreenShowing = newValue;
			}
		},

		isMenuOpened: {
			get: function() {
				return this.$store.state.isHeaderMenuOpened;
			},
			set: function(newValue) {
				this.$store.state.isHeaderMenuOpened = newValue;
			}
		}
	},
	created() {
		if (this.isWelcomeScreenShowing) {
			//document.documentElement.classList.add("locked");
			return;
		}

		setTimeout(() => {
			//document.documentElement.classList.remove("locked");
		}, 500);
	},
	mounted() {
		this.setCurrentSlide();
	}
};
</script>

<style lang="scss">
.home {
	//background: $black;
	height: 100%;
	flex-grow: 1;

	.stars-particles {
		background: $black;
		z-index: 999;
	}
}

.case-swiper {
	height: 100%;
	position: relative;

	&__item {
		height: 100% !important;
		
		& > .container {
			height: 100%;

			.case-card {
				opacity: 0;
				transition: 0.3s;
				transition-delay: 0s;
				transition-property: opacity;
			}
		}

		&.swiper-slide-active {
			& > .container {
				.case-card {
					opacity: 1;
					transition: 0.8s;
					transition-delay: 0.5s;
					transition-property: opacity;
				}
			}
		}
	}

	.case-card {
		height: 100%;

		&__text {
			p {
				display: none;

				@include upLandscape($sm-land) {
					display: none;
				}

				@include upLandscape($md-land) {
					display: flex;
				}
			}

			.case-tags {
				display: none;

				@include up($md) {
					display: flex;
				}

				@include upLandscape($sm-land) {
					display: none;
				}

				@include upLandscape($md-land) {
					display: flex;
				}
			}
		}
	}

	&-pagination {
		/*
		position: absolute;
		top: 50%;
		bottom: auto;
		left: get-vw($gutter, 320);
		transform: translateY(-95%);
		*/
		position: absolute;
		top: 50%;
		left: 57%;
		transform: translate(-50%, -50%);

		width: auto;
		z-index: 2;
		//color: rgba(2, 98, 206, 0.45);
		font-size: get-vw(14px, 320);
		font-weight: 400;
		line-height: get-vw(14px, 320);
		transition: color, $transition;

		&__inner {
			color: $white;
		}

		@include up($sm) {
			//left: get-vw($gutter, 414);
			font-size: get-vw(16px, 414);
			line-height: get-vw(16px, 414);
		}

		@include up($md) {
			//left: get-vw($gutter-sm, 768);
			font-size: get-vw(18px, 768);
			line-height: get-vw(18px, 768);
		}

		@include up($lg) {
			//left: get-vw($gutter-sm, 1024);
			font-size: get-vw(18px, 1024);
			line-height: get-vw(18px, 1024);
		}

		@include upLandscape($xs) {
			font-size: get-vw(14px, 568);
			line-height: get-vw(14px, 568);
			//transform: translateY(-50%);
		}

		@include upLandscape($sm-land) {
			//left: get-vw($gutter, 895);
			font-size: get-vw(16px, 895);
		}

		@include upLandscape($md-land) {
			//left: get-vw($gutter-sm, 1024);
			font-size: get-vw(18px, 1024);
			line-height: get-vw(18px, 1024);
		}

		@include upLandscape($lg-land) {
			//left: get-vw($gutter-sm, 1366);
			font-size: get-vw(18px, 1366);
			line-height: get-vw(18px, 1366);
		}

		@include upLandscape($xl-land) {
			//left: get-vw($gutter-sm, 1920);
			font-size: get-vw(18px, 1920);
			line-height: get-vw(18px, 1920);
		}
	}

	&-nav {
		position: absolute;
		transition: .4s;
		top: 50%;
		right: get-vw($gutter, 320);
		z-index: 2;
		transform: translateY(-80%);

		svg {
			path {
				stroke: inherit;
			}
		}

		&__prev,
		&__next {
			width: get-vw(18px, 320);
			height: get-vw(18px, 320);
			cursor: pointer;
			opacity: 0.5;
			transition: opacity 0.3s;
			outline: none;
			fill: none;
			transition: stroke, $transition;
			user-select: none;

			&:hover {
				opacity: 1;
			}

			&.swiper-button-disabled {
				opacity: 0.3;
				cursor: default;
			}

			@include up($sm) {
				width: get-vw(20px, 414);
				height: get-vw(20px, 414);
			}

			@include up($md) {
				width: get-vw(20px, 768);
				height: get-vw(20px, 768);
			}

			@include up($lg) {
				width: get-vw(28px, 1024);
				height: get-vw(28px, 1024);
			}

			@include upLandscape($xs) {
				width: get-vw(18px, 568);
				height: get-vw(18px, 568);
			}

			@include upLandscape($sm-land) {
				width: get-vw(20px, 895);
				height: get-vw(20px, 895);
			}

			@include upLandscape($md-land) {
				width: get-vw(18px, 1024);
				height: get-vw(18px, 1024);
			}

			@include upLandscape($lg-land) {
				width: get-vw(28px, 1366);
				height: get-vw(28px, 1366);
			}

			@include upLandscape($xl-land) {
				width: get-vw(28px, 1920);
				height: get-vw(28px, 1920);
			}
		}

		&__prev {
			margin-bottom: get-vw(60px, 320);

			@include up($sm) {
				margin-bottom: get-vw(60px, 414);
			}

			@include up($md) {
				margin-bottom: get-vw(100px, 768);
			}

			@include up($lg) {
				margin-bottom: get-vw(100px, 1024);
			}

			@include upLandscape($xs) {
				margin-bottom: get-vw(80px, 568);
			}

			@include upLandscape($sm-land) {
				margin-bottom: get-vw(80px, 895);
			}

			@include upLandscape($md-land) {
				margin-bottom: get-vw(100px, 1024);
			}

			@include upLandscape($lg-land) {
				margin-bottom: get-vw(100px, 1366);
			}

			@include upLandscape($xl-land) {
				margin-bottom: get-vw(100px, 1920);
			}
		}

		&__next {
			transform: rotate(180deg);
		}

		&.hidden {
			
			.case-swiper-nav__prev {
				margin-bottom: 100%;
				transition: margin-bottom .4s ease .4s, opacity .4s ease .8s, visibility .4s ease .8s;
			}

			.case-swiper-pagination {
				opacity: 0;
				visibility: hidden;
			}

			svg {
				opacity: 0;
				visibility: hidden;
				transition: opacity .4s ease .8s, visibility .4s ease .8s;
			}

		}

		@include up($sm) {
			right: get-vw($gutter, 414);
		}

		@include up($md) {
			right: get-vw($gutter-sm, 768);
		}

		@include up($lg) {
			right: get-vw($gutter-sm, 1024);
		}

		@include upLandscape($xs) {
			transform: translateY(-50%);
			right: get-vw($gutter, 568);
		}

		@include upLandscape($sm-land) {
			right: get-vw(24px, 895);
		}

		@include upLandscape($md-land) {
			right: get-vw(40px, 1024);
		}

		@include upLandscape($lg-land) {
			right: get-vw(40px, 1366);
		}

		@include upLandscape($xl-land) {
			right: get-vw(50px, 1920);
		}
	}
}
</style>