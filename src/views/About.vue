<template>
	<main class="about">

		<CaseHeader>

			<CaseCard
				title="Разрабатываем мобильные приложения"
				:imageSrc="require('../assets/img/about/img-0.png')"
				glowColor="#0262ce"
			/>
		</CaseHeader>

		<SingleSection>
			<TitleText text="Мы – динамично развивающаяся IT-компания из Санкт-Петербурга. Уже 3 года внедряем новые технологии в бизнес, создавая нативные приложения. Разрабатываем проекты любой сложности." />
		</SingleSection>

		<SingleSection>
			<ImageBlock :imageSrc="require('../assets/img/big-img.png')" small />
		</SingleSection>

		<SingleSection>
			<SliderTabs title="Дизайн" btnColor="#ef4a4a" :items="sliderTabsItems" />
		</SingleSection>

		<SingleSection>
			<SliderInfo title="Разработка" btnColor="#ef4a4a" slider :items="sliderInfoItems" />
		</SingleSection>

		<SingleSection>
			<ImageBlock :imageSrc="require('../assets/img/big-img.png')" small />
		</SingleSection>

		<SingleSection>
			<ImageBlock :imageSrc="require('../assets/img/about/img-1.png')" big />
		</SingleSection>

		<SingleSection>
			<SliderFaq title="Вопрос-Ответ" btnColor="#ef4a4a" />
		</SingleSection>

		<SingleSection>
			<FeedbackBlock btnColor="#ef4a4a" />
		</SingleSection>
	</main>
</template>

<script>
import CaseHeader from "@/components/elements/CaseHeader";
import SingleSection from "@/components/elements/SingleSection";
import SectionTitle from "@/components/elements/SectionTitle";
import CaseCard from "@/components/elements/CaseCard";
import TitleText from "@/components/elements/TitleText";
import ImageBlock from "@/components/elements/ImageBlock";
import SliderInfo from "@/components/elements/SliderInfo";
import SliderTabs from "@/components/elements/SliderTabs";
import SliderFaq from "@/components/elements/SliderFaq";
import FeedbackBlock from "@/components/elements/FeedbackBlock";

export default {
	name: "About",
	components: {
		CaseHeader,
		SingleSection,
		SectionTitle,
		CaseCard,
		TitleText,
		ImageBlock,
		SliderInfo,
		SliderFaq,
		SliderTabs,
		FeedbackBlock
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
		sliderTabsItems: [
			{
				content: require('../assets/img/big-img.png'),
				text: '<p>Все начинается с создания дизайн-концепции после согласования которой мы производим оформление всех экранов. Разрабатывая интуитивно понятный интерфейс приложения нами используется индивидуальный подход к каждому проекту.</p>',
			},
			{
				content: require('../assets/img/big-img.png'),
				text: '<p>Все начинается с создания дизайн-концепции после согласования которой мы производим оформление всех экранов. Разрабатывая интуитивно понятный интерфейс приложения нами используется индивидуальный подход к каждому проекту.</p>',
			},
			{
				content: require('../assets/img/big-img.png'),
				text: '<p>Все начинается с создания дизайн-концепции после согласования которой мы производим оформление всех экранов. Разрабатывая интуитивно понятный интерфейс приложения нами используется индивидуальный подход к каждому проекту.</p>',
			},
		],
		sliderInfoItems: [
			{
				title: 'Backend - разработка',
				text: 'Программно-аппаратная часть нашего сервиса. Набор средств, с помощью которых происходит реализация логики приложения.',
				icon: 'settings',
			},
			{
				title: 'Frontend - разработка',
				text: 'Разработка функциональности и пользовательского интерфейса. Сюда относится всё, что пользователь видит, открывая приложение.',
				icon: 'instruments',
			},
			{
				title: 'iOS',
				text: 'Платформа iOS – флагман мобильных приложений с самыми высокими показателями прибыли. Объединяет наиболее платежеспособную аудиторию.',
				icon: 'apple-logo',
			},
			{
				title: 'Android',
				text: 'Создавая приложение, мы стараемся реализовать потенциал платформы для максимального охвата аудитории и устройств.',
				icon: 'android',
			},
		]
	}),
	mounted() {
		//console.log(this.$route.name);
		this.$emit('onCaseLoad', 0)
	}
};
</script>

<style lang="scss">
.about {
	background: $black;
	height: 100%;
	flex-grow: 1;

	.case-header {
		background-image: url('../assets/img/stars.png');
		background-size: cover;
	}
}
</style>