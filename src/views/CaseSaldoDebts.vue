<template>
	<main class="case">
		<SingleSection>
			<SectionTitle>🤔 Возможности приложения</SectionTitle>
			<ContentBlockWrap>
				<ContentBlockLG
					title="Ведите долги совместно"
					text="Приглашайте участников сделки, отправив QR-код или ссылку-приглашение"
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
				/>
				<ContentBlockLG
					title="Управляйте совместными долгами"
					text="Любые изменения по долгу происходят только с согласия всех сторон сделки. Каждому участнику доступна история платежей и действий за весь период"
					image="left"
					bgStyle="background-color: #1a1a1a;"
				/>
				<ContentBlockSM
					title="Отслеживайте статистику"
					text="Анализируйте динамику изменения общей суммы ваших долгов и займов за выбранный период"
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
				/>
				<ContentBlockMD
					title="Изменяйте сумму долга"
					text="Увеличение суммы задолженности, частичное её погашение – все корректировки фиксируются в приложении"
					bgStyle="background-color: #f9f9f9;"
					textStyle="color: #000000;"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../assets/img/big-img.png')" />
			<ContentBlockWrap>
				<ContentBlockLG
					title="Сохраняйте конфиденциальность личных данных"
					text="Доступ к сделкам осуществляется по паролю, а личные данные участников остаются скрытыми"
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
				/>
			</ContentBlockWrap>
		</SingleSection>
		<SingleSection bgStyle="background-color: #ffffff;">
			<TextBlock />
			<ListBlock :imageSrc="require('../assets/img/saldo_mockup.png')" />
		</SingleSection>
		<SingleSection>
			<TitleText />
			<ImageBlock :imageSrc="require('../assets/img/big-img.png')" />
			<ContentBlockWrap>
				<ContentBlockIcon
					title="Исследование и проектирование"
					subTitle="24 часа"
					text="После обсуждения функционала с заказчиком мы выделили основные пользовательские кейсы и предложения, и создали эскизную схему работы приложения для дальнейшего прототипирования. Заказчик согласовал архитектуру приложения показанную на эскизе."
					bgStyle="background: #ffffff;"
					textStyle="color: #000000"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../assets/img/big-img-2.png')" />
			<ContentBlockWrap>
				<ContentBlockIcon
					title="Исследование и проектирование"
					subTitle="24 часа"
					text="После обсуждения функционала с заказчиком мы выделили основные пользовательские кейсы и предложения, и создали эскизную схему работы приложения для дальнейшего прототипирования. Заказчик согласовал архитектуру приложения показанную на эскизе."
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff);"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../assets/img/big-img-3.png')" />
		</SingleSection>
		<SingleSection>
			<SliderInfo title="🤖 Технологии" />
		</SingleSection>
		<SingleSection bgStyle="background-color: #ffffff;">
			<PaletteBlock :colors="colors" />
		</SingleSection>
		<SingleSection>
			<ImageBlock :imageSrc="require('../assets/img/big-img.png')" />
		</SingleSection>
		<SingleSection>
			<SliderFaq title="Вопрос-Ответ 🙄" />
		</SingleSection>
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
	name: "CaseSaldoDebts",
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
	}),
	mounted() {
		console.log(this.$route.name);
		this.$emit('onCaseLoad', 0)
	}
};
</script>

<style lang="scss">
.case {
	background: $black;
	height: 100%;
	flex-grow: 1;

	.case-header {
		.swiper-container {
			//pointer-events: none;
		}

		.case-card {

			&__text,
			&__img {
				//pointer-events: all;
			}
		}
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
			transition-delay: .5s;
		}
	}
}
</style>