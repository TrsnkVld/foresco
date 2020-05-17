<template>
	<main class="home">
		<transition name="menu">
			<!--<StarsParticles v-if="isWelcomeScreenShowing" intro /> -->
		</transition>
		<CaseHeader>
			<swiper
				class="case-swiper"
				:options="swiperOptions"
				ref="casesSwiper"
				@slideChange="setCurrentSlide"
			>
				<swiper-slide class="case-swiper__item" v-for="(item, index) in cases" :key="index">
					<CaseCard
						:title="item.title"
						:logo="item.logo"
						:subTitle="item.subtitle"
						:imageSrc="item.image"
						:glowColor="item.color"
					/>
				</swiper-slide>
			</swiper>
			<div class="case-swiper-pagination" :style="`color: ${cases[currentSlide].color}`" />
			<div class="case-swiper-nav">
				<svgicon
					name="arrow"
					class="case-swiper-nav__prev"
					slot="button-prev"
					:style="`stroke: ${cases[currentSlide].color}`"
				/>
				<svgicon
					name="arrow"
					class="case-swiper-nav__next svg-down"
					slot="button-next"
					:style="`stroke: ${cases[currentSlide].color}`"
				/>
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
		},
		currentSlide: 0,
		cases: [
			{
				title: "Saldo. Долги",
				subtitle: "Приложение для учёта и ведения долгов и расходов",
				color: "#0262ce",
				image: require("../assets/img/saldo_mockup.png"),
				logo: require("../assets/img/logo.png")
			},
			{
				title: "Musealbum",
				subtitle: "Cервис для создания и печати фотоальбомов",
				color: "#c1a476",
				image: require("../assets/img/musealbum.png"),
				logo: require("../assets/img/musealbum_logo.png")
			},
			{
				title: "Sohobook",
				subtitle: "Приложение для создания и заказа фотокниг",
				color: "#0895be",
				image: require("../assets/img/soho.png"),
				logo: require("../assets/img/soho_logo.png")
			},
			{
				title: "Power Place",
				subtitle: "Cервис для поиска заведений с Power Bank",
				color: "#737373",
				image: require("../assets/img/powerplace.png"),
				logo: require("../assets/img/powerplace_logo.png")
			},
			{
				title: "Find Photo",
				subtitle: "Сортировка и поиск фотографий по меткам",
				color: "#f04f6c",
				image: require("../assets/img/findphoto.png"),
				logo: require("../assets/img/findphoto_logo.png")
			},
			{
				title: "Gusli",
				subtitle: "Поиск и заказ музыки в заведениях",
				color: "#f04f6c",
				image: require("../assets/img/gusli.png"),
				logo: require("../assets/img/gusli_logo.png")
			}
		]
	}),
	methods: {
		setCurrentSlide() {
			this.currentSlide = this.$refs.casesSwiper.$swiper.activeIndex;
		}
	},
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
	},
	mounted() {
		this.setCurrentSlide();
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
		/*
		transition: 0.4s;
		filter: blur(3px);
		transition-property: transform, filter;

		&.swiper-slide-active {
			filter: none;
		}
		*/

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
		transform: translateY(-95%);
		color: rgba(2, 98, 206, 0.45);
		font-size: get-vw(14px, 320);
		font-weight: 500;
		line-height: get-vw(14px, 320);
		transition: color, $transition;

		.swiper-pagination-current {
			color: $white;
		}

		@include up($md) {
			left: $gutter-sm;
			font-size: 25px;
			line-height: 30px;
		}

		@include upLandscape($xs) {
			font-size: get-vw(14px, 568);
			line-height: get-vw(14px, 568);
			transform: translateY(-50%);
		}
	}

	&-nav {
		position: absolute;
		top: 50%;
		right: $gutter;
		z-index: 2;
		transform: translateY(-80%);

		&__prev,
		&__next {
			width: get-vw(18px, 320);
			height: get-vw(18px, 320);
			background-image: url("../assets/icons/arrow-right.svg");
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			cursor: pointer;
			opacity: 0.5;
			transition: opacity 0.3s;
			outline: none;
			fill: none;
			transition: stroke, $transition;

			&:hover {
				opacity: 1;
			}

			&.swiper-button-disabled {
				opacity: 0.3;
				cursor: default;
			}

			@include up($md) {
				width: 30px;
				height: 30px;
			}

			@include upLandscape($xs) {
				width: get-vw(18px, 568);
				height: get-vw(18px, 568);
			}
		}

		&__prev {
			margin-bottom: get-vw(30px, 320);

			@include up($md) {
				margin-bottom: $gutter-md;
			}
		}

		&__next {
			transform: rotate(180deg);
		}

		@include up($md) {
			right: $gutter-sm;
		}

		@include upLandscape($xs) {
			transform: translateY(-50%);
		}
	}
}
</style>