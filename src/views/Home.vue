<template>
	<main class="home">
		<transition name="menu">
			<StarsParticles v-if="isWelcomeScreenShowing" intro />
		</transition>

		<CaseHeader>
			<swiper class="case-swiper" :options="swiperOptions" ref="swiper">
				<swiper-slide class="case-swiper__item" v-for="(item, index) in 3" :key="index">
					<CaseCard glowColor="#3779bccc" />
				</swiper-slide>
			</swiper>
			<div class="case-swiper-pagination" />
			<div class="case-swiper-nav">
				<div class="case-swiper-nav__prev" slot="button-prev" />
				<div class="case-swiper-nav__next" slot="button-next" />
			</div>
		</CaseHeader>
	</main>
</template>

<script>
import StarsParticles from "@/components/elements/StarsParticles";
import CaseHeader from "@/components/elements/CaseHeader";
import SingleSection from "@/components/elements/SingleSection";
import SectionTitle from "@/components/elements/SectionTitle";
import CaseCard from "@/components/elements/CaseCard";
import ContentBlockWrap from "@/components/elements/ContentBlockWrap";
import ContentBlockSM from "@/components/elements/ContentBlockSM";
import ContentBlockMD from "@/components/elements/ContentBlockMD";
import ContentBlockLG from "@/components/elements/ContentBlockLG";
import ContentBlockIcon from "@/components/elements/ContentBlockIcon";
import TitleText from "@/components/elements/TitleText";
import ImageBlock from "@/components/elements/ImageBlock";
import TextBlock from "@/components/elements/TextBlock";
import ListBlock from "@/components/elements/ListBlock";
import SliderInfo from "@/components/elements/SliderInfo";
import SliderFaq from "@/components/elements/SliderFaq";
import PaletteBlock from "@/components/elements/PaletteBlock";

export default {
	name: "Home",
	components: {
		StarsParticles,
		CaseHeader,
		SingleSection,
		SectionTitle,
		CaseCard,
		ContentBlockWrap,
		ContentBlockSM,
		ContentBlockMD,
		ContentBlockLG,
		ContentBlockIcon,
		TitleText,
		ImageBlock,
		TextBlock,
		ListBlock,
		SliderInfo,
		SliderFaq,
		PaletteBlock
	},
	data: () => ({
		colors: [
			"background-color: #f04f6c;",
			"background-color: #141516;",
			"background-color: #2d2d32;",
			"background-color: #ffffff;"
		],
		swiperOptions: {
			direction: "vertical",
			mousewheel: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			speed: 900,
			//spaceBetween: 15,
			navigation: {
				nextEl: ".case-swiper-nav__next",
				prevEl: ".case-swiper-nav__prev"
			},
			pagination: {
				el: ".case-swiper-pagination",
				type: "fraction",

				renderFraction: function(currentClass, totalClass) {
					return `<span class="${currentClass}"></span>—<span class="${totalClass}"></span>`;
				}
			}
		}
	}),
	computed: {

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
			document.documentElement.classList.add("locked");
			return;
		}
		setTimeout(() => {
			document.documentElement.classList.remove("locked");
		}, 500);
	}
};
</script>

<style lang="scss">
.home {
	background: $black;
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
		opacity: 0;
		transition: opacity 0.3s;

		&.swiper-slide-active {
			opacity: 1;
			transition-delay: 0.5s;
		}

		& > .container {
			height: 100%;
		}
	}

	.case-card {
		height: 100%;

		&__text {
			p,
			.case-tags {
				display: none;

				@include up($lg) {
					display: block;
				}
			}
		}
	}

	&-pagination {
		position: absolute;
		top: 50%;
		bottom: auto;
		left: $gutter;
		display: flex;
		flex-flow: column;
		align-items: center;
		width: auto;
		z-index: 2;
		transform: translateY(-50%);
		color: rgba(2, 98, 206, 0.45);
		line-height: 25px;

		.swiper-pagination-current {
			color: $white;
		}

		@include up($md) {
			left: $gutter-sm;
		}
	}

	&-nav {
		position: absolute;
		top: 50%;
		right: $gutter;
		z-index: 2;
		transform: translateY(-50%);

		&__prev,
		&__next {
			width: 16px;
			height: 16px;
			background-image: url("../assets/icons/arrow-right.svg");
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			cursor: pointer;
			opacity: 0.5;
			transition: opacity 0.3s;
			outline: none;

			&:hover {
				opacity: 1;
			}

			&.swiper-button-disabled {
				opacity: 0.3;
				cursor: default;
			}

			@include up($lg) {
				width: 30px;
				height: 30px;
			}
		}

		&__prev {
			margin-bottom: $gutter-sm;
		}

		&__next {
			transform: rotate(180deg);
		}

		@include up($md) {
			right: $gutter-sm;
		}
	}
}
</style>