<template>
	<main class="about">

		<!-- TODO: В моб версии картинку сразу под заголовком -->
		<CaseHeader>
			<CaseCard
				title="Разрабатываем мобильные приложения"
				:imageSrc="require('../assets/img/about/img-0.png')"
				glowColor="#0262ce"
			/>
		</CaseHeader>

		<SingleSection>
			<TitleText
				text="Мы – динамично развивающаяся IT-компания из Санкт-Петербурга. Уже 3 года внедряем новые технологии в бизнес, создавая нативные приложения. Разрабатываем проекты любой сложности."
			/>
			<ImageBlock :imageSrc="require('../assets/img/big-img.png')" small />
			<SliderTabs
				title="Дизайн"
				btnColor="rgb(2, 98, 206)"
				:items="sliderTabsItems"
				itemsTitles="Прототипирование Интерфейсы Анимации"
			/>
			<SliderInfo title="Разработка" btnColor="rgb(2, 98, 206)" slider :items="sliderInfoItems" />
			<SliderTabs
				title="Сервис"
				btnColor="rgb(2, 98, 206)"
				:items="sliderTabsServiceItems"
				itemsTitles="Тестирование Публикация Поддержка Развитие"
			/>
			<ImageBlock :imageSrc="require('../assets/img/about/img-1.png')" big />
			<SliderFaq title="Вопрос-Ответ" btnColor="rgb(2, 98, 206)" />
			<FeedbackBlock btnColor="rgb(2, 98, 206)" />
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
				content: require("../assets/img/about/design-1.png"),
				text:
					"<p>Задача данного этапа –  создание модели конечного продукта. Разработка прототипа мобильного приложения позволяет определить функционал программы. На этом этапе решаются наиболее важные бизнес задачи, проводится согласование с клиентом и тестирование технической части проекта.</p><p>Прототипирование позволяет создать продукт, соответствующий ожиданиям клиента по всем параметрам.</p>"
			},
			{
				content: require("../assets/img/about/design-2.png"),
				text:
					"<p>Разработка интерфейса начинается с создания дизайн-концепции, после согласования которой мы оформляем все экраны. Индивидуальный подход к каждому проекту позволяет создать интуитивно понятный интерфейс. Простота восприятия делает наши продукты доступными для каждого пользователя.</p>"
			},
			{
				animation: require("../assets/img/about/design-animation.json"),
				text:
					"<p>С помощью анимации дизайнерам удается создавать прогрессивно открывающиеся блоки. Пользователь видит меньше информации одновременно, что делает интерфейс более простым для восприятия.</p><p>Ваше приложение — это история, которую вы рассказываете пользователям. С помощью анимации мы можем представить эту историю намного эффектнее.</p>"
			}
		],
		sliderTabsServiceItems: [
			{
				content: require("../assets/img/about/Group-12.png"),
				text:
					"<p>Перед запуском приложения мы проводим полномасштабное исследование на наличие багов. Тщательно изучаем функциональность приложения и проводим все необходимые мероприятия, чтобы не упустить ни одного расхождения с техническим заданием. Задача нашей команды – выпустить качественное мобильное приложение.</p>",
				small: true,
			},
			{
				content: require("../assets/img/about/Group-12.png"),
				text:
					"<p>После окончания разработки мы готовим необходимую документацию по каждому приложению. Публикуем проект в App Store или Google Play, отслеживаем статистику, предоставляя актуальную информацию по количеству скачиваний и активных пользователей.</p>",
				small: true,
			},
			{
				content: require("../assets/img/about/Group-12.png"),
				text:
					"<p>Мы оказываем техническую поддержку по продукту каждому клиенту. Вы можете обратиться к нам в любое время, и наша команда поможет решить проблему.</p>",
				small: true,
			},
			{
				content: require("../assets/img/about/Group-12.png"),
				text:
					"<p>Мы всегда поддерживаем наших клиентов и стремимся сделать продукт лучше и совершеннее, создавая обновления.</p>",
				small: true,
			},
		],
		sliderInfoItems: [
			{
				title: "Backend - разработка",
				text:
					"Программно-аппаратная часть нашего сервиса. Набор средств, с помощью которых происходит реализация логики приложения.",
				icon: "settings"
			},
			{
				title: "Frontend - разработка",
				text:
					"Разработка функциональности и пользовательского интерфейса. Сюда относится всё, что пользователь видит, открывая приложение.",
				icon: "instruments"
			},
			{
				title: "iOS",
				text:
					"Платформа iOS – флагман мобильных приложений с самыми высокими показателями прибыли. Объединяет наиболее платежеспособную аудиторию.",
				icon: "apple-logo"
			},
			{
				title: "Android",
				text:
					"Создавая приложение, мы стараемся реализовать потенциал платформы для максимального охвата аудитории и устройств.",
				icon: "android"
			}
		]
	}),
	mounted() {
		//console.log(this.$route.name);
		this.$emit("onCaseLoad", 0);
	}
};
</script>

<style lang="scss">
.about {
	//background: $black;

	.case-header {
		//background-image: url("../assets/img/stars.png");
		//background-size: cover;
		height: auto !important;
	}

	.case-card {
		word-spacing: 6000px;
	}


	@include adopt($xl) {
		.case-card {
			&__text {
				padding-top: get-vw(70px, 768);
			}
		}
	}

	@include adopt($lg) {
		height: 100%;
		flex-grow: 1;

		.case-card {
			flex-flow: row-reverse;
		}

		.title-text {
			padding-top: 0;
			padding-bottom: 0;
		}

		.case-tags {
			flex-flow: column;
			align-items: center;
    		width: 170px;

			svg {
				width: 100%;
				height: auto;

				&:first-child {
					margin-bottom: get-vw(20px, 320);
				}
			}
		}

		.case-card {
			flex-flow: column-reverse;
			height: auto;
			padding-top: 0;

			h1 {
				margin: get-vw(90px, 320) 0;
			}

			h6 {
				display: none;
			}

			&__img {
				flex-shrink: 0;
				height: get-vw(250px, 320);
			}

			&__text {
				min-height: 100vh;
				padding-top: get-vw(100px, 414);
				box-sizing: border-box;
			}

			.glow {
				top: 25%;
			}
		}
	}

	@include adopt($md) {
		.case-card {
			&__text {
				padding-top: get-vw(100px, 414);
			}
		}
	}
}
</style>