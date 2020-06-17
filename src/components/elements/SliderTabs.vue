<template>
	<b-container class="slider-tabs">
		<h2 data-aos="fade-up" class="section-title text-left flex-grow-1" v-if="title">{{ title }}</h2>
		<!--
		<div data-aos="fade-up" class="swiper-pagination">
			<h5
				class="swiper-pagination-bullet"
				:class="{'swiper-pagination-bullet-active': index===activeTab}"
				v-for="(item, index) in tabsTitles"
				:key="index"
			>
				<svgicon name="arrow" />
				<span @click="onTabTitleClick(index)">{{item}}</span>
			</h5>
		</div>
		-->
		<swiper
			data-aos="fade-up"
			class="swiper-pagination"
			:options="swiperPagination"
			ref="swiperPagination"
		>
			<swiper-slide v-for="(item, index) in tabsTitles" :key="index">
				<h5
					class="swiper-pagination-bullet"
					:class="{'swiper-pagination-bullet-active': index===activeTab}"
				>
					<svgicon name="arrow" />
					<span @click="onTabTitleClick(index)">{{item}}</span>
				</h5>
			</swiper-slide>
		</swiper>
		<swiper data-aos="fade-up" ref="tabsSwiper" @slideChange="slideChanged" :options="swiperOptions">
			<swiper-slide class="slider-tabs__item" v-for="(item, index) in items" :key="index">
				<b-row>
					<b-col cols="12" sm="6">
						<template v-if="item.animation">
							<lottie
								class="animation"
								:options="{animationData: item.animation}"
								v-on:animCreated="handleAnimation"
							/>
						</template>
						<img v-else :src="item.content" :class="{'small': item.small}" alt="tab_img" />
					</b-col>
					<b-col cols="12" sm="6" v-html="item.text" class="d-flex flex-column justify-content-center" />
				</b-row>
			</swiper-slide>
		</swiper>
	</b-container>
</template>

<script>
import Lottie from "./lottie";

export default {
	name: "SliderTabs",
	props: {
		title: {
			type: String,
			default: null
		},
		btnColor: {
			type: String,
			default: null
		},
		items: {
			type: Array,
			default: () => ({})
		},
		itemsTitles: {
			type: String,
			default: null
		}
	},
	components: {
		'lottie': Lottie
	},
	data: () => ({
		activeTab: 0,
		swiperOptions: {
			grabCursor: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			speed: 900,
			spaceBetween: 140
		},
		swiperPagination: {
			centeredSlides: true,
			slidesPerView: "auto",
			speed: 900,
			slideToClickedSlide: true
		}
	}),
	methods: {
		onTabTitleClick(index) {
			this.activeTab = index;
			this.$refs.tabsSwiper.$swiper.slideTo(index);
		},

		slideChanged() {
			this.activeTab = this.$refs.tabsSwiper.$swiper.activeIndex;
		},

		handleAnimation: function(anim) {
			this.anim = anim;
		},

		stop: function() {
			this.anim.stop();
		},

		play: function() {
			this.anim.play();
		},

		pause: function() {
			this.anim.pause();
		},

		onSpeedChange: function() {
			this.anim.setSpeed(this.animationSpeed);
		}
	},
	computed: {
		tabsTitles() {
			return this.itemsTitles.split(" ");
		}
	},
	mounted() {
		this.$nextTick(() => {
			const tabsSwiper = this.$refs.tabsSwiper.$swiper;
			const swiperPagination = this.$refs.swiperPagination.$swiper;
			tabsSwiper.controller.control = swiperPagination;
			swiperPagination.controller.control = tabsSwiper;
		});
	}
};
</script>

<style lang="scss">
.slider-tabs {
	color: $white;
	user-select: none;
	text-align: center;

	h2 {
		width: 100%;
	}

	h5 {
		width: auto;

		span {
			cursor: pointer;
		}
	}

	.row {
		margin: 0 -70px;
		flex-flow: column;

		.col-12 {
			flex: 0 0 100%;
			max-width: 100%;
		}
	}

	.col-12 {
		padding: 0 70px;
	}

	.swiper {
		&-container {
			overflow: visible;
		}

		&-slide {
			opacity: 0;
			transition: opacity 0.6s ease;

			&-active {
				opacity: 1;
			}
		}

		&-pagination {
			display: flex;
			justify-content: space-between;
			position: unset;
			width: auto;
			margin: 0 -20px;

			.swiper {
				&-wrapper {
					@include up($lg) {
						transform: unset !important;
						display: flex;
						justify-content: space-between;
					}

					@include upLandscape($md-land) {
						transform: unset !important;
						display: flex;
						justify-content: space-between;
					}
				}

				&-slide {
					width: auto;
					opacity: 1;
					padding: 0 20px;
				}
			}

			&-bullet {
				width: auto;
				height: auto;
				outline: none;
				display: flex;
				align-items: center;

				svg {
					width: 16px;
					height: 16px;
					transform: rotate(90deg);
					fill: none;
					margin-right: 25px;
					opacity: 0;
					transition: opacity $transition;
					display: none;

					@include up($lg) {
						display: block;
					}

					@include upLandscape($md-land) {
						display: block;
					}
				}

				&-active {
					background: transparent;

					svg {
						opacity: 1;
					}
				}
			}
		}
	}

	&__item {
		img, .animation {
			padding: get-vw(60px, 320) 0;

			&.small {
				width: 70%;
			}
		}
	}

	@include up($sm) {
		.slider-tabs__item img, .slider-tabs__item .animation {
			padding: get-vw(60px, 414) 0;
		}
	}

	@include up($md) {
		.swiper-container {
			width: 70%;
		}

		.slider-tabs__item img, .slider-tabs__item .animation {
			padding: get-vw(60px, 768) 0 get-vw(80px, 768);
		}
	}

	@include up($lg) {
		text-align: left;

		.row {
			flex-flow: row;
			margin: 0 -30px;

			.col-12 {
				flex: 0 0 50%;
				max-width: 50%;
				padding: 0 30px;
			}
		}

		.swiper-container {
			width: 100%;
		}

		.slider-tabs__item img, .slider-tabs__item .animation {
			padding: get-vw(60px, 768) 0 get-vw(80px, 768);
		}
	}

	@include upLandscape($xs-land) {
		text-align: left;

		.row {
			flex-flow: row;
			margin: 0 -20px;

			.col-12 {
				flex: 0 0 50%;
				max-width: 50%;
				padding: 0 20px;
			}
		}

		.swiper-container {
			width: 100%;
		}

		.slider-tabs__item img, .slider-tabs__item .animation {
			padding: get-vw(60px, 768) 0 get-vw(80px, 768);
		}
	}

	@include upLandscape($lg-land) {
		text-align: left;

		.row {
			flex-flow: row;
			margin: 0 -70px;

			.col-12 {
				flex: 0 0 50%;
				max-width: 50%;
				padding: 0 70px;
			}
		}

		.slider-tabs__item img, .slider-tabs__item .animation {
			padding: get-vw(80px, 1366) 0;
		}
	}
}
</style>