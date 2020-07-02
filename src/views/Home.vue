<template>
	<main :class="routeName">
		<CaseHeader :class="{'no-swipe': !isRouteNameHome}" @onScreenRotation="onScreenRotation">
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
						:alias="item.alias"
						:tags="item.tags"
						:svgs="item.svgs"
					/>
				</swiper-slide>
			</swiper>

			<div class="case-swiper-nav" :class="{'hidden': !isRouteNameHome}">
				<svgicon
					name="arrow"
					class="case-swiper-nav__item case-swiper-nav__prev"
					slot="button-prev"
					:style="`stroke: ${cases[0].color}`"
					@click="onClickNavNext()"
				/>
				<div class="case-swiper-pagination">
					<div class="case-swiper-pagination__inner" />
				</div>
				<svgicon
					name="arrow"
					class="case-swiper-nav__item case-swiper-nav__next svg-down"
					slot="button-next"
					:style="`stroke: ${cases[0].color}`"
					@click="onClickNavPrev()"
				/>
			</div>
		</CaseHeader>

		<transition name="route">
			<router-view @onCaseLoad="setCaseIndex" />
		</transition>
	</main>
</template>

<script>
import { TweenMax } from "gsap";
import { debounce } from "debounce";

export default {
	name: "Home",
	data() {
		const self = this;
		//const currentTransitionSpeed = 0;

		return {
			allowNext: true,
			componentKey: 0,
			sliderMouseWheel: true,
			currentTransitionSpeed: 0,
			currentSlide: 1,
			slideOpacity: 1,
			dragged: 0,

			colors: [
				"#f04f6c",
				"#0262ce",
				"#c1a476",
				"#0895be",
				"#737373",
				"#f04f6c"
			],

			swiperOptions: {
				direction: "vertical",
				mousewheelControl: true,
				preventInteractionOnTransition: false,
				slidesPerView: 1,
				slidesPerGroup: 1,
				simulateTouch: true,
				//speed: 1600,
				//shortSwipes: true,
				//longSwipesMs: 100,
				//threshold: 20,
				//effect: 'fade',
				//followFinger: false,
				//spaceBetween: 15,

				//////
				//custom
				longSwipesMs: 400,

				speed: 1000,
				watchSlidesProgress: true,
				virtualTranslate: true,
				watchSlidesVisibility: true,
				effect: "myCustomTransition",
				///////
				on: {
					init: function() {
						const swiper = this;
						//console.log(swiper);
					},

					transitionStart() {
						//console.log('transitionStart');
						// Update if start
						self.allowNext = false;
						self.afterSliderTransition();
					},

					progress: function(progress) {
						const swiper = this;
						if (swiper.params.effect !== "myCustomTransition") return;
						self.progress(swiper, progress);
					},

					setTransition(transition) {
						const swiper = this;
						if (swiper.params.effect !== "myCustomTransition") return;
						self.setTransition(swiper, transition);
					},
					setTranslate(translate) {
						const swiper = this;
						if (swiper.params.effect !== "myCustomTransition") return;
						self.setTranslate(swiper, translate);
					}
				},
				pagination: {
					el: ".case-swiper-pagination__inner",
					type: "fraction",

					renderFraction: function(currentClass, totalClass) {
						return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
					}
				}
			}
		};
	},
	methods: {

		onScreenRotation() {
			setTimeout(() => {
				this.swiper.update();
			}, 1000);
		},

		test() {
			//this.$refs.casesSwiper.$swiper.params.preventInteractionOnTransition=false;
			//this.$refs.casesSwiper.$swiper.slideNext();
			console.log(this.swiper);
		},

		getTransitionSpeed() {
			const transitionSpeed = this.currentTransitionSpeed;
			// don't forget to reset the variable for future calls
			this.currentTransitionSpeed = 0;
			return 1000;
		},

		setCaseIndex(caseIndex) {
			this.currentSlide = caseIndex;
			this.$refs.casesSwiper.$swiper.slideTo(caseIndex, 0);
		},

		progress(swiper, progress) {
			/* 
			if you need to change something for each progress
			do it here (progress variable is always in range from 0 to 1) representing progress of the whole slider 
			*/
		},

		getActiveIndexBeforeTransitionStart(swiper, slides) {
			const isDragging = !Math.abs(slides[swiper.activeIndex].progress === 1);
			if (isDragging) {
				return swiper.slidesGrid.indexOf(
					-swiper.touchEventsData.startTranslate || swiper.params.initialSlide
				);
			} else {
				return swiper.activeIndex;
			}
		},

		getDirection(animationProgress) {
			if (animationProgress === 0) {
				return "NONE";
			} else if (animationProgress > 0) {
				return "NEXT";
			} else {
				return "BACK";
			}
		},

		setTransition(swiper, transitionSpeed) {
			this.currentTransitionSpeed = transitionSpeed;
			// console.log("transition", transitionSpeed);
		},

		setTranslate(swiper, wrapperTranslate) {
			const durationInSeconds = this.getTransitionSpeed() / 1000;
			// convert slides object to plain array
			const slides = Object.values(swiper.slides).slice(0, -1);

			// get the index of the slide active before transition start (activeIndex changes halfway when dragging)
			const originIndex = this.getActiveIndexBeforeTransitionStart(
				swiper,
				slides
			);
			// get information about animation progress from the active slide - the active slide's value is always -1 to 1.
			/* 
				every slide has a progress attribute equal to the "distance" from the current active index.
			*/
			//console.warn(slides[originIndex].progress);
			//const animationProgress = slides[originIndex].progress;
			// you can then get the drag direction like so:
			//const direction = this.getDirection(animationProgress);
			// console.log(direction);

			// do magic with each slide
			slides.map((slide, index) => {
				// to put the slides behind each other we have to set their CSS translate accordingly since by default they are arranged in line.
				const offset = slide.swiperSlideOffset;
				let x = -offset;
				if (!swiper.params.virtualTranslate) x -= swiper.translate;
				let y = 0;
				if (!swiper.isHorizontal()) {
					y = x;
					x = 0;
				}
				TweenMax.set(slide, {
					x,
					y
				});

				// do our animation stuff!
				const clip = (val, min, max) => Math.max(min, Math.min(val, max));
				const ZOOM_FACTOR = 0.5;
				const TRANSLATE_FACTOR = 150;

				const opacity = Math.max(1 - Math.abs(slide.progress * 10), 0);

				if (slide.progress > 0.5) {
					//console.log('x');
				}

				const clippedProgress = clip(slide.progress, -1, 1);
				const scale = 1 - ZOOM_FACTOR * clippedProgress;
				y = 1 - TRANSLATE_FACTOR * clippedProgress;

				// you can do your CSS animation instead of using tweening.
				TweenMax.to(slide, durationInSeconds, {
					//y: x,
					//scale,
					//'margin-top': tY*10,
				});
				TweenMax.to(slide.children[0], durationInSeconds, {
					y,
					opacity
				});
			});
		},

		setCurrentSlide() {
			const color = this.cases[this.$refs.casesSwiper.$swiper.activeIndex]
				.color;
			this.currentSlide = this.$refs.casesSwiper.$swiper.activeIndex;

			setTimeout(() => {
				document.querySelectorAll(".case-swiper-nav__item").forEach(element => {
					element.style.stroke = color;
				});
			}, 100);
		},

		handleClickSlide(event) {
			//console.log(event);
			//this.dragged = +1;
			//console.log('asd');
			//if(this.dragged === 2) {
			//console.log(this.$refs.casesSwiper.$swiper.activeIndex);
			//this.slideOpacity = this.slideOpacity - 0.005;
			//}
		},

		afterSliderTransition() {
			setTimeout(() => {
				this.allowNext = true;
			}, 800);
		},

		watchScrollWheel(event) {
			//event.preventDefault();
			//console.log(event);
			if (this.allowNext && this.isRouteNameHome) {
				if (event.deltaY < 0) {
					debounce(this.swiper.slidePrev(), 2000);
				} else {
					debounce(this.swiper.slideNext(), 2000);
				}

				event.stopPropagation();
				event.preventDefault();
			}
		},

		onClickNavNext() {
			if (this.allowNext) {
				this.swiper.slidePrev();
				this.allowNext = false;
				this.afterSliderTransition();
			}
		},

		onClickNavPrev() {
			if (this.allowNext) {
				this.swiper.slideNext();
				this.allowNext = false;

				this.afterSliderTransition();
			}
		}
	},
	computed: {
		swiper() {
			return this.$refs.casesSwiper.$swiper;
		},

		isSwiperAnimating() {
			return this.$refs.casesSwiper.$swiper.animating;
		},

		isRouteNameHome() {
			if (this.$route.name === "home") return true;
			return false;
		},

		cases() {
			return this.$store.state.cases;
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

	destroyed() {
		this.content.removeEventListener("wheel", this.watchScrollWheel);
	},

	watch: {
		$route(to, from) {
			if (!this.isRouteNameHome) {
				this.swiper.params.simulateTouch = false;
				 document.querySelector('html').classList.remove("locked");
			} else {
				 document.querySelector('html').classList.add("locked"); 
			}
		}
	},

	mounted() {
		this.content = document.querySelector("body");
		this.content2 = document.querySelector(".case-swiper-nav__item");
		this.content.addEventListener("wheel", this.watchScrollWheel, {passive: false});
		this.content.addEventListener("click", this.watchNavClick);

		this.setCurrentSlide();	
		
		if (!this.isRouteNameHome) {
			document.querySelector('html').classList.remove("locked");
		} else {
			document.querySelector('html').classList.add("locked"); 
		}
	}
};
</script>

<style lang="scss">
.slider {
	height: 100%;

	&-slide {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			height: 600px;
		}
	}
}

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
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s ease 0s;

		& > .container {
			height: 100%;

			.case-card {
			}
		}

		a {
			pointer-events: none;
		}

		&.swiper-slide-active {
			pointer-events: all;
			opacity: 1;
			transition: opacity 0.3s ease 0.4s;

			& > .container {
				.case-card {
				}
			}

			a {
				pointer-events: all;
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
		transition: 0.4s;
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
			transition: stroke 0.6s;
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
				transition: margin-bottom 0.4s ease 0.4s, opacity 0.4s ease 0.8s,
					visibility 0.4s ease 0.8s;
			}

			.case-swiper-pagination {
				opacity: 0;
				visibility: hidden;
			}

			svg {
				opacity: 0;
				visibility: hidden;
				transition: opacity 0.4s ease 0.8s, visibility 0.4s ease 0.8s;
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