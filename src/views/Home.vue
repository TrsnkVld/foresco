<template>
	<main class="home">
		<CaseHeader>
			<swiper class="case-swiper" :options="swiperOptions" ref="swiper">
				<swiper-slide class="case-swiper__item" v-for="(item, index) in 3" :key="index">
					<CaseCard glowColor="#3779bccc" />
				</swiper-slide>
				<div class="case-swiper-pagination" slot="pagination" />
			</swiper>
			<div class="case-swiper-nav">
				<div class="case-swiper-nav__prev" slot="button-prev" />
				<div class="case-swiper-nav__next" slot="button-next" />
			</div>
		</CaseHeader>
	</main>
</template>

<script>
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
	})
};
</script>

<style lang="scss">
.home {
	background: $black;
	height: 100%;
	flex-grow: 1;
}

.case-swiper {
	height: 100vh;
	position: relative;

	&__item {
		opacity: 0;
		transition: opacity 0.3s;

		&.swiper-slide-active {
			opacity: 1;
			transition-delay: .5s;
		}
	}

	&-pagination {
		position: absolute;
		top: 50%;
		bottom: auto;
		left: $gutter-sm;
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
	}

	&-nav {
		position: absolute;
		top: 50%;
		right: $gutter-sm;
		z-index: 2;
		transform: translateY(-50%);

		&__prev,
		&__next {
			width: 30px;
			height: 30px;
			background-image: url("../assets/icons/arrow-right.svg");
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			cursor: pointer;
			opacity: .5;
			transition: opacity 0.3s;
			outline: none;

			&:hover {
				opacity: 1;
			}

			&.swiper-button-disabled {
				opacity: .3;
				cursor: default;
			}
		}

		&__prev {
			margin-bottom: $gutter-sm;
		}

		&__next {
			transform: rotate(180deg);
		}
	}
}
</style>